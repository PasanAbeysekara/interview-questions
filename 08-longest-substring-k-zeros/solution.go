// Longest Substring with at Most K Zeros
// Time: O(n), Space: O(1)

package main

import "fmt"

func longestOnes(s string, k int) int {
    maxLen := 0
    left := 0
    zeroCount := 0
    
    for right := 0; right < len(s); right++ {
        if s[right] == '0' {
            zeroCount++
        }
        
        for zeroCount > k {
            if s[left] == '0' {
                zeroCount--
            }
            left++
        }
        
        if right - left + 1 > maxLen {
            maxLen = right - left + 1
        }
    }
    
    return maxLen
}

// Test
func main() {
    fmt.Println(longestOnes("1101100111", 2))  // Output: 8
    fmt.Println(longestOnes("000111", 2))      // Output: 5
}
