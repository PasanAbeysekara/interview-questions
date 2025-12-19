// Remove Duplicates from Sorted Array (in-place)
// Time: O(n), Space: O(1)

package main

import "fmt"

func removeDuplicates(nums []int) int {
    if len(nums) == 0 {
        return 0
    }
    
    writeIdx := 1
    
    for i := 1; i < len(nums); i++ {
        if nums[i] != nums[i-1] {
            nums[writeIdx] = nums[i]
            writeIdx++
        }
    }
    
    return writeIdx
}

// Test
func main() {
    nums := []int{1, 1, 2, 2, 3, 4, 4}
    newLen := removeDuplicates(nums)
    fmt.Printf("Length: %d, Array: %v\n", newLen, nums[:newLen])
    // Output: Length: 4, Array: [1 2 3 4]
}
