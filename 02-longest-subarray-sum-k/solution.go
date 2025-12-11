// Longest Subarray with Sum K
// Time: O(n), Space: O(n)

package main

import "fmt"

func longestSubarrayWithSumK(arr []int, k int) int {
    prefixSumMap := make(map[int]int)
    sum := 0
    maxLen := 0
    
    for i, num := range arr {
        sum += num
        
        if sum == k {
            maxLen = i + 1
        }
        
        if idx, found := prefixSumMap[sum - k]; found {
            if i - idx > maxLen {
                maxLen = i - idx
            }
        }
        
        if _, found := prefixSumMap[sum]; !found {
            prefixSumMap[sum] = i
        }
    }
    
    return maxLen
}

// Test
func main() {
    result := longestSubarrayWithSumK([]int{1, 2, 3, 1, 1, 1, 1}, 3)
    fmt.Println(result) // Output: 3
}
