// Kth Smallest Element in Array
// Time: O(n) average with quickselect, O(n log k) with heap
// Space: O(1) quickselect / O(k) heap

package main

import (
	"fmt"
	"math/rand"
	"time"
)

type Solution struct{}

// Using quickselect - O(n) average
func (s *Solution) findKthSmallest(nums []int, k int) int {
	rand.Seed(time.Now().UnixNano())
	return s.quickselect(nums, 0, len(nums)-1, k-1)
}

func (s *Solution) quickselect(nums []int, left, right, kSmallest int) int {
	if left == right {
		return nums[left]
	}
	
	pivotIdx := left + rand.Intn(right-left+1)
	pivotIdx = s.partition(nums, left, right, pivotIdx)
	
	if kSmallest == pivotIdx {
		return nums[kSmallest]
	} else if kSmallest < pivotIdx {
		return s.quickselect(nums, left, pivotIdx-1, kSmallest)
	} else {
		return s.quickselect(nums, pivotIdx+1, right, kSmallest)
	}
}

func (s *Solution) partition(nums []int, left, right, pivotIdx int) int {
	pivot := nums[pivotIdx]
	nums[pivotIdx], nums[right] = nums[right], nums[pivotIdx]
	storeIdx := left
	
	for i := left; i < right; i++ {
		if nums[i] < pivot {
			nums[storeIdx], nums[i] = nums[i], nums[storeIdx]
			storeIdx++
		}
	}
	
	nums[right], nums[storeIdx] = nums[storeIdx], nums[right]
	return storeIdx
}

// Test
func main() {
	sol := &Solution{}
	fmt.Println(sol.findKthSmallest([]int{3, 2, 1, 5, 6, 4}, 2))           // 2
	fmt.Println(sol.findKthSmallest([]int{3, 2, 3, 1, 2, 4, 5, 5, 6}, 4)) // 3
}
