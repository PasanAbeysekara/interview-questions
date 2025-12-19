// Top K Frequent Elements
// Time: O(n log n), Space: O(n)

package main

import (
    "container/heap"
    "fmt"
)

type Item struct {
    value int
    freq  int
}

type MinHeap []Item

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i].freq < h[j].freq }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(Item))
}

func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    item := old[n-1]
    *h = old[0 : n-1]
    return item
}

func topKFrequent(nums []int, k int) []int {
    // Count frequencies
    freqMap := make(map[int]int)
    for _, num := range nums {
        freqMap[num]++
    }
    
    // Use min heap of size k
    h := &MinHeap{}
    heap.Init(h)
    
    for value, freq := range freqMap {
        heap.Push(h, Item{value, freq})
        if h.Len() > k {
            heap.Pop(h)
        }
    }
    
    // Extract results
    result := make([]int, k)
    for i := 0; i < k; i++ {
        result[i] = heap.Pop(h).(Item).value
    }
    
    return result
}

// Test
func main() {
    result := topKFrequent([]int{1, 1, 1, 2, 2, 3}, 2)
    fmt.Println(result) // Output: [2 1] or [1 2]
}
