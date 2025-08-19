"""
智能路径规划算法主程序
"""

import numpy as np
import matplotlib.pyplot as plt
from typing import List, Tuple
import time

from algorithms.dynamic_programming import DynamicProgrammingPathfinder
from algorithms.reinforcement_learning import DQNAgent, PathPlanningEnvironment

class PathPlanner:
    """路径规划器主类"""

    def __init__(self, grid_size: Tuple[int, int] = (20, 20)):
        self.grid_size = grid_size
        self.dp_pathfinder = DynamicProgrammingPathfinder(grid_size)
        self.env = PathPlanningEnvironment(grid_size)
        self.agent = DQNAgent(state_size=2, action_size=4)

    def set_obstacles(self, obstacles: List[Tuple[int, int]]):
        """设置障碍物"""
        self.dp_pathfinder.set_obstacles(obstacles)
        for obs in obstacles:
            self.env.grid[obs] = 1

    def plan_path_dp(self, start: Tuple[int, int], goal: Tuple[int, int]):
        """使用动态规划规划路径"""
        return self.dp_pathfinder.calculate_optimal_path(start, goal)

    def plan_path_rl(self, start: Tuple[int, int], goal: Tuple[int, int], episodes: int = 1000):
        """使用强化学习规划路径"""
        # 训练智能体
        for episode in range(episodes):
            state = self.env.reset(start, goal)
            total_reward = 0
            steps = 0
            max_steps = 100

            while steps < max_steps:
                action = self.agent.act(state)
                next_state, reward, done = self.env.step(action)
                
                self.agent.remember(state, action, reward, next_state, done)
                self.agent.replay()
                
                state = next_state
                total_reward += reward
                steps += 1

                if done:
                    break

        # 使用训练好的智能体规划路径
        path = [start]
        current_pos = start
        self.env.current_pos = start

        for _ in range(100):  # 最大步数限制
            state = self.env._get_state()
            action = self.agent.act(state, training=False)
            next_state, _, done = self.env.step(action)
            current_pos = self.env.current_pos
            path.append(current_pos)

            if done:
                break

        return {
            'path': path,
            'distance': len(path) - 1,
            'success': goal in path
        }

    def visualize_path(self, path: List[Tuple[int, int]], title: str = "路径规划结果"):
        """可视化路径"""
        plt.figure(figsize=(10, 8))
        
        # 绘制网格
        grid = np.zeros(self.grid_size)
        for obs in self.dp_pathfinder.grid:
            if obs == 1:
                grid[obs] = 1
        
        plt.imshow(grid.T, cmap='gray', origin='lower')
        
        # 绘制路径
        if path:
            path_x = [pos[0] for pos in path]
            path_y = [pos[1] for pos in path]
            plt.plot(path_x, path_y, 'b-', linewidth=2, label='规划路径')
            plt.plot(path_x, path_y, 'bo', markersize=4)
        
        # 标记起点和终点
        if path:
            plt.plot(path[0][0], path[0][1], 'go', markersize=10, label='起点')
            plt.plot(path[-1][0], path[-1][1], 'ro', markersize=10, label='终点')
        
        plt.title(title)
        plt.xlabel('X坐标')
        plt.ylabel('Y坐标')
        plt.legend()
        plt.grid(True)
        plt.show()

    def compare_algorithms(self, start: Tuple[int, int], goal: Tuple[int, int]):
        """比较不同算法的性能"""
        print("=== 算法性能对比 ===")
        
        # 动态规划
        print("\n1. 动态规划算法:")
        dp_result = self.plan_path_dp(start, goal)
        print(f"   路径长度: {dp_result['distance']}")
        print(f"   计算时间: {dp_result['computation_time']:.4f}秒")
        print(f"   成功率: {'是' if dp_result['success'] else '否'}")
        
        # 强化学习
        print("\n2. 强化学习算法:")
        rl_result = self.plan_path_rl(start, goal)
        print(f"   路径长度: {rl_result['distance']}")
        print(f"   成功率: {'是' if rl_result['success'] else '否'}")
        
        return dp_result, rl_result

def main():
    """主函数"""
    print("智能路径规划算法演示")
    print("=" * 50)
    
    # 创建路径规划器
    planner = PathPlanner(grid_size=(15, 15))
    
    # 设置障碍物
    obstacles = [
        (3, 3), (3, 4), (3, 5), (3, 6),
        (7, 7), (7, 8), (7, 9), (7, 10),
        (10, 3), (10, 4), (10, 5),
        (5, 12), (6, 12), (7, 12)
    ]
    planner.set_obstacles(obstacles)
    
    # 设置起点和终点
    start = (1, 1)
    goal = (13, 13)
    
    print(f"起点: {start}")
    print(f"终点: {goal}")
    print(f"障碍物数量: {len(obstacles)}")
    
    # 比较算法性能
    dp_result, rl_result = planner.compare_algorithms(start, goal)
    
    # 可视化结果
    if dp_result['success']:
        planner.visualize_path(dp_result['path'], "动态规划路径规划结果")
    
    if rl_result['success']:
        planner.visualize_path(rl_result['path'], "强化学习路径规划结果")

if __name__ == "__main__":
    main()
