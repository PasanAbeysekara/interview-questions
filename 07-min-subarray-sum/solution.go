// Minimum Size Subarray Sum
// Find minimal length of contiguous subarray with sum >= target
// Time: O(n), Space: O(1)

package main

import (
    "fmt"
    "math"
)

func minSubArrayLen(target int, nums []int) int {
    minLen := math.MaxInt32
    left := 0
    sum := 0
    
    for right := 0; right < len(nums); right++ {
        sum += nums[right]
        
        for sum >= target {
            if right - left + 1 < minLen {
                minLen = right - left + 1
            }
            sum -= nums[left]
            left++
        }
    }
    
    if minLen == math.MaxInt32 {
        return 0
    }
    return minLen
}

// Test
func main() {
    fmt.Println(minSubArrayLen(7, []int{2, 3, 1, 2, 4, 3}))  // Output: 2
    fmt.Println(minSubArrayLen(4, []int{1, 4, 4}))           // Output: 1
    fmt.Println(minSubArrayLen(11, []int{1, 1, 1, 1, 1}))    // Output: 0
}
