# Shortest Path in Unweighted Graph (BFS)
# Time: O(V + E), Space: O(V)

from typing import List, Dict
from collections import deque

class Solution:
    def shortestPath(self, graph: Dict[int, List[int]], start: int, end: int) -> int:
        if start == end:
            return 0
        
        queue = deque([(start, 0)])
        visited = {start}
        
        while queue:
            node, dist = queue.popleft()
            
            for neighbor in graph.get(node, []):
                if neighbor == end:
                    return dist + 1
                
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, dist + 1))
        
        return -1  # No path found

# Test
if __name__ == "__main__":
    sol = Solution()
    graph = {
        0: [1, 2],
        1: [0, 3, 4],
        2: [0, 4],
        3: [1],
        4: [1, 2, 5],
        5: [4]
    }
    print(sol.shortestPath(graph, 0, 5))  # 3
    print(sol.shortestPath(graph, 0, 3))  # 2
