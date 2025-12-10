// Two Sum - Return indices of two numbers that add up to target
// Time: O(n), Space: O(n)

using System;
using System.Collections.Generic;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> seen = new Dictionary<int, int>();
        
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            if (seen.ContainsKey(complement)) {
                return new int[] { seen[complement], i };
            }
            seen[nums[i]] = i;
        }
        
        throw new ArgumentException("No solution found");
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        int[] result = sol.TwoSum(new int[] {2, 7, 11, 15}, 9);
        Console.WriteLine($"[{result[0]}, {result[1]}]"); // Output: [0, 1]
    }
}
