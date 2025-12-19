// Longest Consecutive Sequence
// Time: O(n), Space: O(n)

package main

import "fmt"

func longestConsecutive(nums []int) int {
    numSet := make(map[int]bool)
    for _, num := range nums {
        numSet[num] = true
    }
    
    maxLen := 0
    
    for num := range numSet {
        // Only start counting from the beginning of a sequence
        if !numSet[num-1] {
            currentNum := num
            currentLen := 1
            
            for numSet[currentNum+1] {
                currentNum++
                currentLen++
            }
            
            if currentLen > maxLen {
                maxLen = currentLen
            }
        }
    }
    
    return maxLen
}

// Test
func main() {
    fmt.Println(longestConsecutive([]int{100, 4, 200, 1, 3, 2}))  // Output: 4
    fmt.Println(longestConsecutive([]int{0, 3, 7, 2, 5, 8, 4, 6, 0, 1}))  // Output: 9
}
