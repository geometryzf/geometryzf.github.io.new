"""
强化学习路径规划算法实现
"""

import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from collections import deque
import random
from typing import List, Tuple, Optional

class QNetwork(nn.Module):
    """Q网络"""

    def __init__(self, state_size: int, action_size: int, hidden_size: int = 64):
        super(QNetwork, self).__init__()
        self.fc1 = nn.Linear(state_size, hidden_size)
        self.fc2 = nn.Linear(hidden_size, hidden_size)
        self.fc3 = nn.Linear(hidden_size, action_size)
        self.relu = nn.ReLU()

    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        return self.fc3(x)

class DQNAgent:
    """深度Q学习智能体"""

    def __init__(self, state_size: int, action_size: int, learning_rate: float = 0.001):
        self.state_size = state_size
        self.action_size = action_size
        self.learning_rate = learning_rate

        # Q网络
        self.q_network = QNetwork(state_size, action_size)
        self.target_network = QNetwork(state_size, action_size)
        self.optimizer = optim.Adam(self.q_network.parameters(), lr=learning_rate)

        # 经验回放
        self.memory = deque(maxlen=10000)
        self.batch_size = 32

        # 超参数
        self.gamma = 0.95  # 折扣因子
        self.epsilon = 1.0  # 探索率
        self.epsilon_min = 0.01
        self.epsilon_decay = 0.995
        self.update_target_every = 100

        self.step_count = 0

    def remember(self, state, action, reward, next_state, done):
        """存储经验"""
        self.memory.append((state, action, reward, next_state, done))

    def act(self, state, training: bool = True):
        """选择动作"""
        if training and np.random.random() <= self.epsilon:
            return random.randrange(self.action_size)

        state_tensor = torch.FloatTensor(state).unsqueeze(0)
        q_values = self.q_network(state_tensor)
        return np.argmax(q_values.detach().numpy())

    def replay(self):
        """经验回放训练"""
        if len(self.memory) < self.batch_size:
            return

        batch = random.sample(self.memory, self.batch_size)
        states = torch.FloatTensor([e[0] for e in batch])
        actions = torch.LongTensor([e[1] for e in batch])
        rewards = torch.FloatTensor([e[2] for e in batch])
        next_states = torch.FloatTensor([e[3] for e in batch])
        dones = torch.BoolTensor([e[4] for e in batch])

        current_q_values = self.q_network(states).gather(1, actions.unsqueeze(1))
        next_q_values = self.target_network(next_states).max(1)[0].detach()
        target_q_values = rewards + (self.gamma * next_q_values * ~dones)

        loss = nn.MSELoss()(current_q_values.squeeze(), target_q_values)

        self.optimizer.zero_grad()
        loss.backward()
        self.optimizer.step()

        if self.epsilon > self.epsilon_min:
            self.epsilon *= self.epsilon_decay

        self.step_count += 1
        if self.step_count % self.update_target_every == 0:
            self.update_target_network()

    def update_target_network(self):
        """更新目标网络"""
        self.target_network.load_state_dict(self.q_network.state_dict())

    def save_model(self, filepath: str):
        """保存模型"""
        torch.save(self.q_network.state_dict(), filepath)

    def load_model(self, filepath: str):
        """加载模型"""
        self.q_network.load_state_dict(torch.load(filepath))
        self.target_network.load_state_dict(torch.load(filepath))

class PathPlanningEnvironment:
    """路径规划环境"""

    def __init__(self, grid_size: Tuple[int, int]):
        self.grid_size = grid_size
        self.grid = np.zeros(grid_size)
        self.start = None
        self.goal = None
        self.current_pos = None
        self.directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # 右、下、左、上

    def reset(self, start: Tuple[int, int], goal: Tuple[int, int]):
        """重置环境"""
        self.start = start
        self.goal = goal
        self.current_pos = start
        return self._get_state()

    def step(self, action: int):
        """执行动作"""
        dx, dy = self.directions[action]
        new_x = self.current_pos[0] + dx
        new_y = self.current_pos[1] + dy

        # 检查边界
        if (0 <= new_x < self.grid_size[0] and 
            0 <= new_y < self.grid_size[1] and 
            self.grid[new_x, new_y] == 0):
            self.current_pos = (new_x, new_y)

        # 计算奖励
        reward = self._calculate_reward()
        done = self.current_pos == self.goal

        return self._get_state(), reward, done

    def _get_state(self):
        """获取当前状态"""
        # 简化的状态表示：当前位置和目标位置的相对位置
        dx = self.goal[0] - self.current_pos[0]
        dy = self.goal[1] - self.current_pos[1]
        return [dx, dy]

    def _calculate_reward(self):
        """计算奖励"""
        if self.current_pos == self.goal:
            return 100  # 到达目标
        else:
            # 基于距离的奖励
            distance = np.sqrt((self.goal[0] - self.current_pos[0])**2 + 
                             (self.goal[1] - self.current_pos[1])**2)
            return -distance  # 距离越近奖励越高
