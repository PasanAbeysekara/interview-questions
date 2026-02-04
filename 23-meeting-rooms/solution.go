// Meeting Rooms II - Minimum Number of Meeting Rooms
// Time: O(n log n), Space: O(n)

package main

import (
	"container/heap"
	"fmt"
	"sort"
)

type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *IntHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

type Solution struct{}

func (s *Solution) minMeetingRooms(intervals [][]int) int {
	if len(intervals) == 0 {
		return 0
	}
	
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
	
	h := &IntHeap{intervals[0][1]}
	heap.Init(h)
	
	for i := 1; i < len(intervals); i++ {
		if intervals[i][0] >= (*h)[0] {
			heap.Pop(h)
		}
		heap.Push(h, intervals[i][1])
	}
	
	return h.Len()
}

// Test
func main() {
	sol := &Solution{}
	fmt.Println(sol.minMeetingRooms([][]int{{0, 30}, {5, 10}, {15, 20}})) // 2
	fmt.Println(sol.minMeetingRooms([][]int{{7, 10}, {2, 4}}))            // 1
}
