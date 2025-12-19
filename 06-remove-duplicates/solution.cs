// Remove Duplicates from Sorted Array (in-place)
// Time: O(n), Space: O(1)

using System;

public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length == 0) {
            return 0;
        }
        
        int writeIdx = 1;
        
        for (int i = 1; i < nums.Length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[writeIdx] = nums[i];
                writeIdx++;
            }
        }
        
        return writeIdx;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        int[] nums = {1, 1, 2, 2, 3, 4, 4};
        int newLen = sol.RemoveDuplicates(nums);
        Console.Write($"Length: {newLen}, Array: ");
        for (int i = 0; i < newLen; i++) {
            Console.Write(nums[i] + " ");
        }
        Console.WriteLine();
        // Output: Length: 4, Array: 1 2 3 4
    }
}
