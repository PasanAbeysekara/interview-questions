// Shortest Path in Unweighted Graph (BFS)
// Time: O(V + E), Space: O(V)

using System;
using System.Collections.Generic;

public class Solution {
    public int ShortestPath(Dictionary<int, List<int>> graph, int start, int end) {
        if (start == end) return 0;
        
        Queue<(int node, int dist)> queue = new Queue<(int, int)>();
        queue.Enqueue((start, 0));
        HashSet<int> visited = new HashSet<int> { start };
        
        while (queue.Count > 0) {
            var (node, dist) = queue.Dequeue();
            
            if (graph.ContainsKey(node)) {
                foreach (int neighbor in graph[node]) {
                    if (neighbor == end) {
                        return dist + 1;
                    }
                    
                    if (!visited.Contains(neighbor)) {
                        visited.Add(neighbor);
                        queue.Enqueue((neighbor, dist + 1));
                    }
                }
            }
        }
        
        return -1;  // No path found
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Dictionary<int, List<int>> graph = new Dictionary<int, List<int>> {
            {0, new List<int> {1, 2}},
            {1, new List<int> {0, 3, 4}},
            {2, new List<int> {0, 4}},
            {3, new List<int> {1}},
            {4, new List<int> {1, 2, 5}},
            {5, new List<int> {4}}
        };
        
        Console.WriteLine(sol.ShortestPath(graph, 0, 5));  // 3
        Console.WriteLine(sol.ShortestPath(graph, 0, 3));  // 2
    }
}
