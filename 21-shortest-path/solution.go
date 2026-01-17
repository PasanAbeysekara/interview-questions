// Shortest Path in Unweighted Graph (BFS)
// Time: O(V + E), Space: O(V)

package main

import "fmt"

type Solution struct{}

type pair struct {
	node int
	dist int
}

func (s *Solution) shortestPath(graph map[int][]int, start, end int) int {
	if start == end {
		return 0
	}
	
	queue := []pair{{start, 0}}
	visited := make(map[int]bool)
	visited[start] = true
	
	for len(queue) > 0 {
		curr := queue[0]
		queue = queue[1:]
		node, dist := curr.node, curr.dist
		
		if neighbors, ok := graph[node]; ok {
			for _, neighbor := range neighbors {
				if neighbor == end {
					return dist + 1
				}
				
				if !visited[neighbor] {
					visited[neighbor] = true
					queue = append(queue, pair{neighbor, dist + 1})
				}
			}
		}
	}
	
	return -1 // No path found
}

// Test
func main() {
	sol := &Solution{}
	graph := map[int][]int{
		0: {1, 2},
		1: {0, 3, 4},
		2: {0, 4},
		3: {1},
		4: {1, 2, 5},
		5: {4},
	}
	fmt.Println(sol.shortestPath(graph, 0, 5)) // 3
	fmt.Println(sol.shortestPath(graph, 0, 3)) // 2
}
