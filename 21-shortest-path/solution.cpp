// Shortest Path in Unweighted Graph (BFS)
// Time: O(V + E), Space: O(V)

#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <unordered_set>

using namespace std;

class Solution {
public:
    int shortestPath(unordered_map<int, vector<int>>& graph, int start, int end) {
        if (start == end) return 0;
        
        queue<pair<int, int>> q;
        q.push({start, 0});
        unordered_set<int> visited;
        visited.insert(start);
        
        while (!q.empty()) {
            auto [node, dist] = q.front();
            q.pop();
            
            if (graph.find(node) != graph.end()) {
                for (int neighbor : graph[node]) {
                    if (neighbor == end) {
                        return dist + 1;
                    }
                    
                    if (visited.find(neighbor) == visited.end()) {
                        visited.insert(neighbor);
                        q.push({neighbor, dist + 1});
                    }
                }
            }
        }
        
        return -1;  // No path found
    }
};

// Test
int main() {
    Solution sol;
    unordered_map<int, vector<int>> graph;
    graph[0] = {1, 2};
    graph[1] = {0, 3, 4};
    graph[2] = {0, 4};
    graph[3] = {1};
    graph[4] = {1, 2, 5};
    graph[5] = {4};
    
    cout << sol.shortestPath(graph, 0, 5) << endl;  // 3
    cout << sol.shortestPath(graph, 0, 3) << endl;  // 2
    
    return 0;
}
