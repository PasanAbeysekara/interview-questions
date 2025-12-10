// Two Sum - Return indices of two numbers that add up to target
// Time: O(n), Space: O(n)

package main

import "fmt"

func twoSum(nums []int, target int) []int {
    seen := make(map[int]int)
    
    for i, num := range nums {
        complement := target - num
        if idx, found := seen[complement]; found {
            return []int{idx, i}
        }
        seen[num] = i
    }
    
    return nil
}

// Test
func main() {
    result := twoSum([]int{2, 7, 11, 15}, 9)
    fmt.Println(result) // Output: [0 1]
}
