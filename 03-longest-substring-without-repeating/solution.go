// Longest Substring Without Repeating Characters
// Time: O(n), Space: O(min(n, m)) where m is charset size

package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
    charIndex := make(map[rune]int)
    maxLen := 0
    left := 0
    
    for right, char := range s {
        if idx, found := charIndex[char]; found && idx >= left {
            left = idx + 1
        }
        
        charIndex[char] = right
        if right - left + 1 > maxLen {
            maxLen = right - left + 1
        }
    }
    
    return maxLen
}

// Test
func main() {
    fmt.Println(lengthOfLongestSubstring("abcabcbb")) // Output: 3
    fmt.Println(lengthOfLongestSubstring("bbbbb"))    // Output: 1
    fmt.Println(lengthOfLongestSubstring("pwwkew"))   // Output: 3
}
