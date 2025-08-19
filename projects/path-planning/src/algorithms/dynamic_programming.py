"""
动态规划路径规划算法实现
"""

import numpy as np
from typing import List, Tuple, Optional
import heapq

class DynamicProgrammingPathfinder:
    """动态规划路径规划器"""
    
    def __init__(self, grid_size: Tuple[int, int]):
        self.grid_size = grid_size
        self.grid = np.zeros(grid_size)
        self.directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # 四个方向
        
    def set_obstacles(self, obstacles: List[Tuple[int, int]]):
        """设置障碍物"""
        for obs in obstacles:
            self.grid[obs] = 1
            
    def find_path(self, start: Tuple[int, int], goal: Tuple[int, int]) -> Optional[List[Tuple[int, int]]]:
        """
        使用动态规划找到最短路径
        
        Args:
            start: 起点坐标
            goal: 终点坐标
            
        Returns:
            路径坐标列表，如果找不到路径则返回None
        """
        if not self._is_valid_position(start) or not self._is_valid_position(goal):
            return None
            
        # 初始化距离矩阵
        distances = np.full(self.grid_size, np.inf)
        distances[start] = 0
        
        # 初始化前驱节点矩阵
        predecessors = {}
        
        # 使用优先队列进行BFS
        queue = [(0, start)]
        visited = set()
        
        while queue:
            current_dist, current_pos = heapq.heappop(queue)
            
            if current_pos in visited:
                continue
                
            visited.add(current_pos)
            
            if current_pos == goal:
                break
                
            # 检查所有相邻节点
            for dx, dy in self.directions:
                next_x, next_y = current_pos[0] + dx, current_pos[1] + dy
                next_pos = (next_x, next_y)
                
                if (self._is_valid_position(next_pos) and 
                    self.grid[next_pos] == 0 and 
                    next_pos not in visited):
                    
                    new_dist = current_dist + 1
                    
                    if new_dist < distances[next_pos]:
                        distances[next_pos] = new_dist
                        predecessors[next_pos] = current_pos
                        heapq.heappush(queue, (new_dist, next_pos))
        
        # 重建路径
        if goal not in predecessors and start != goal:
            return None
            
        path = []
        current = goal
        while current != start:
            path.append(current)
            current = predecessors[current]
        path.append(start)
        path.reverse()
        
        return path
    
    def _is_valid_position(self, pos: Tuple[int, int]) -> bool:
        """检查位置是否有效"""
        return (0 <= pos[0] < self.grid_size[0] and 
                0 <= pos[1] < self.grid_size[1])
    
    def calculate_optimal_path(self, start: Tuple[int, int], goal: Tuple[int, int]) -> dict:
        """
        计算最优路径并返回详细信息
        
        Returns:
            包含路径、距离、计算时间等信息的字典
        """
        import time
        
        start_time = time.time()
        path = self.find_path(start, goal)
        end_time = time.time()
        
        if path is None:
            return {
                'success': False,
                'path': None,
                'distance': None,
                'computation_time': end_time - start_time,
                'message': '无法找到有效路径'
            }
        
        distance = len(path) - 1
        
        return {
            'success': True,
            'path': path,
            'distance': distance,
            'computation_time': end_time - start_time,
            'message': f'找到路径，距离为 {distance} 步'
        }

class MultiObjectivePathfinder(DynamicProgrammingPathfinder):
    """多目标路径规划器"""
    
    def __init__(self, grid_size: Tuple[int, int]):
        super().__init__(grid_size)
        self.weights = {
            'distance': 0.4,
            'safety': 0.3,
            'energy': 0.3
        }
    
    def set_weights(self, weights: dict):
        """设置多目标权重"""
        self.weights = weights
    
    def calculate_safety_score(self, pos: Tuple[int, int]) -> float:
        """计算位置安全分数"""
        # 距离障碍物的安全分数
        min_dist_to_obstacle = float('inf')
        for dx in range(-2, 3):
            for dy in range(-2, 3):
                check_pos = (pos[0] + dx, pos[1] + dy)
                if (self._is_valid_position(check_pos) and 
                    self.grid[check_pos] == 1):
                    dist = abs(dx) + abs(dy)
                    min_dist_to_obstacle = min(min_dist_to_obstacle, dist)
        
        return min_dist_to_obstacle if min_dist_to_obstacle != float('inf') else 5.0
    
    def calculate_energy_cost(self, from_pos: Tuple[int, int], to_pos: Tuple[int, int]) -> float:
        """计算移动能耗"""
        # 基础能耗 + 地形影响
        base_cost = 1.0
        terrain_cost = self.grid[to_pos] * 2.0  # 障碍物区域能耗加倍
        return base_cost + terrain_cost
    
    def find_multi_objective_path(self, start: Tuple[int, int], goal: Tuple[int, int]) -> dict:
        """多目标路径规划"""
        # 这里实现多目标优化算法
        # 简化版本：使用加权A*算法
        
        distances = np.full(self.grid_size, np.inf)
        distances[start] = 0
        
        predecessors = {}
        queue = [(0, start)]
        visited = set()
        
        while queue:
            current_cost, current_pos = heapq.heappop(queue)
            
            if current_pos in visited:
                continue
                
            visited.add(current_pos)
            
            if current_pos == goal:
                break
                
            for dx, dy in self.directions:
                next_x, next_y = current_pos[0] + dx, current_pos[1] + dy
                next_pos = (next_x, next_y)
                
                if (self._is_valid_position(next_pos) and 
                    self.grid[next_pos] == 0 and 
                    next_pos not in visited):
                    
                    # 计算多目标成本
                    distance_cost = 1.0
                    safety_cost = 1.0 / self.calculate_safety_score(next_pos)
                    energy_cost = self.calculate_energy_cost(current_pos, next_pos)
                    
                    total_cost = (self.weights['distance'] * distance_cost +
                                self.weights['safety'] * safety_cost +
                                self.weights['energy'] * energy_cost)
                    
                    new_cost = current_cost + total_cost
                    
                    if new_cost < distances[next_pos]:
                        distances[next_pos] = new_cost
                        predecessors[next_pos] = current_pos
                        heapq.heappush(queue, (new_cost, next_pos))
        
        # 重建路径
        if goal not in predecessors and start != goal:
            return {'success': False, 'path': None}
            
        path = []
        current = goal
        while current != start:
            path.append(current)
            current = predecessors[current]
        path.append(start)
        path.reverse()
        
        return {
            'success': True,
            'path': path,
            'total_cost': distances[goal],
            'distance': len(path) - 1
        }
