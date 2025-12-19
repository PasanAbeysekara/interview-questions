// Rotate Array to the right by k steps
// Time: O(n), Space: O(1) using reversal algorithm

using System;

public class Solution {
    public void Rotate(int[] nums, int k) {
        int n = nums.Length;
        k = k % n; // Handle k > n
        
        // Reverse entire array
        Reverse(nums, 0, n - 1);
        // Reverse first k elements
        Reverse(nums, 0, k - 1);
        // Reverse remaining elements
        Reverse(nums, k, n - 1);
    }
    
    private void Reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        int[] nums = {1, 2, 3, 4, 5, 6, 7};
        sol.Rotate(nums, 3);
        Console.WriteLine(string.Join(" ", nums)); // Output: 5 6 7 1 2 3 4
    }
}
