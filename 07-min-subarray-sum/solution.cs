// Minimum Size Subarray Sum
// Find minimal length of contiguous subarray with sum >= target
// Time: O(n), Space: O(1)

using System;

public class Solution {
    public int MinSubArrayLen(int target, int[] nums) {
        int minLen = int.MaxValue;
        int left = 0;
        int sum = 0;
        
        for (int right = 0; right < nums.Length; right++) {
            sum += nums[right];
            
            while (sum >= target) {
                minLen = Math.Min(minLen, right - left + 1);
                sum -= nums[left];
                left++;
            }
        }
        
        return minLen == int.MaxValue ? 0 : minLen;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.MinSubArrayLen(7, new int[] {2, 3, 1, 2, 4, 3})); // Output: 2
        Console.WriteLine(sol.MinSubArrayLen(4, new int[] {1, 4, 4}));          // Output: 1
        Console.WriteLine(sol.MinSubArrayLen(11, new int[] {1, 1, 1, 1, 1}));   // Output: 0
    }
}
