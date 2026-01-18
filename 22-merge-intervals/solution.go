// Merge Overlapping Intervals
// Time: O(n log n), Space: O(n)

package main

import (
	"fmt"
	"sort"
)

type Solution struct{}

func (s *Solution) merge(intervals [][]int) [][]int {
	if len(intervals) == 0 {
		return [][]int{}
	}
	
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
	
	merged := [][]int{intervals[0]}
	
	for i := 1; i < len(intervals); i++ {
		current := intervals[i]
		last := merged[len(merged)-1]
		
		if current[0] <= last[1] {
			if current[1] > last[1] {
				last[1] = current[1]
			}
		} else {
			merged = append(merged, current)
		}
	}
	
	return merged
}

// Test
func main() {
	sol := &Solution{}
	result1 := sol.merge([][]int{{1, 3}, {2, 6}, {8, 10}, {15, 18}})
	fmt.Println(result1) // [[1 6] [8 10] [15 18]]
	
	result2 := sol.merge([][]int{{1, 4}, {4, 5}})
	fmt.Println(result2) // [[1 5]]
}
