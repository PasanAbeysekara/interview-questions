// Rotate Array to the right by k steps
// Time: O(n), Space: O(1) using reversal algorithm

package main

import "fmt"

func rotate(nums []int, k int) {
    n := len(nums)
    k = k % n // Handle k > n
    
    // Reverse entire array
    reverse(nums, 0, n-1)
    // Reverse first k elements
    reverse(nums, 0, k-1)
    // Reverse remaining elements
    reverse(nums, k, n-1)
}

func reverse(nums []int, start, end int) {
    for start < end {
        nums[start], nums[end] = nums[end], nums[start]
        start++
        end--
    }
}

// Test
func main() {
    nums := []int{1, 2, 3, 4, 5, 6, 7}
    rotate(nums, 3)
    fmt.Println(nums) // Output: [5 6 7 1 2 3 4]
}
