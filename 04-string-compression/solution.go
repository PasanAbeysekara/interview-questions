// String Compression
// Return compressed string only if it's shorter than original
// Time: O(n), Space: O(n)

package main

import (
    "fmt"
    "strconv"
)

func compress(s string) string {
    if len(s) == 0 {
        return s
    }
    
    compressed := ""
    count := 1
    
    for i := 1; i <= len(s); i++ {
        if i < len(s) && s[i] == s[i-1] {
            count++
        } else {
            compressed += string(s[i-1]) + strconv.Itoa(count)
            count = 1
        }
    }
    
    // Return original if compressed is not shorter
    if len(compressed) < len(s) {
        return compressed
    }
    return s
}

// Test
func main() {
    fmt.Println(compress("aaabbc"))   // Output: a3b2c1
    fmt.Println(compress("abc"))      // Output: abc (original)
    fmt.Println(compress("aabbcc"))   // Output: aabbcc (original)
}
