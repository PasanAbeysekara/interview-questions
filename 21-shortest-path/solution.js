// Shortest Path in Unweighted Graph (BFS)
// Time: O(V + E), Space: O(V)

class Solution {
    shortestPath(graph, start, end) {
        if (start === end) return 0;
        
        const queue = [[start, 0]];
        const visited = new Set([start]);
        
        while (queue.length > 0) {
            const [node, dist] = queue.shift();
            
            for (const neighbor of (graph[node] || [])) {
                if (neighbor === end) {
                    return dist + 1;
                }
                
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, dist + 1]);
                }
            }
        }
        
        return -1;  // No path found
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    const graph = {
        0: [1, 2],
        1: [0, 3, 4],
        2: [0, 4],
        3: [1],
        4: [1, 2, 5],
        5: [4]
    };
    console.log(sol.shortestPath(graph, 0, 5));  // 3
    console.log(sol.shortestPath(graph, 0, 3));  // 2
}

module.exports = Solution;
