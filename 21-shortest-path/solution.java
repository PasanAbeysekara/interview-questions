// Shortest Path in Unweighted Graph (BFS)
// Time: O(V + E), Space: O(V)

import java.util.*;

public class Solution {
    public int shortestPath(Map<Integer, List<Integer>> graph, int start, int end) {
        if (start == end) return 0;
        
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{start, 0});
        Set<Integer> visited = new HashSet<>();
        visited.add(start);
        
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int node = curr[0];
            int dist = curr[1];
            
            for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
                if (neighbor == end) {
                    return dist + 1;
                }
                
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(new int[]{neighbor, dist + 1});
                }
            }
        }
        
        return -1;  // No path found
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(0, Arrays.asList(1, 2));
        graph.put(1, Arrays.asList(0, 3, 4));
        graph.put(2, Arrays.asList(0, 4));
        graph.put(3, Arrays.asList(1));
        graph.put(4, Arrays.asList(1, 2, 5));
        graph.put(5, Arrays.asList(4));
        
        System.out.println(sol.shortestPath(graph, 0, 5));  // 3
        System.out.println(sol.shortestPath(graph, 0, 3));  // 2
    }
}
