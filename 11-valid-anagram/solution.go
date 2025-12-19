// Valid Anagram
// Time: O(n), Space: O(1) - fixed charset size
// Unicode handling: map works with runes (Unicode code points)

package main

import "fmt"

// Basic approach
func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }
    
    count := make(map[rune]int)
    
    for _, char := range s {
        count[char]++
    }
    
    for _, char := range t {
        if _, found := count[char]; !found {
            return false
        }
        count[char]--
        if count[char] == 0 {
            delete(count, char)
        }
    }
    
    return len(count) == 0
}

// Test
func main() {
    fmt.Println(isAnagram("anagram", "nagaram"))  // true
    fmt.Println(isAnagram("rat", "car"))          // false
    fmt.Println(isAnagram("测试", "试测"))         // true (Unicode)
}
