// Longest Consecutive Sequence
// Time: O(n), Space: O(n)

using System;
using System.Collections.Generic;

public class Solution {
    public int LongestConsecutive(int[] nums) {
        HashSet<int> numSet = new HashSet<int>(nums);
        int maxLen = 0;
        
        foreach (int num in numSet) {
            // Only start counting from the beginning of a sequence
            if (!numSet.Contains(num - 1)) {
                int currentNum = num;
                int currentLen = 1;
                
                while (numSet.Contains(currentNum + 1)) {
                    currentNum++;
                    currentLen++;
                }
                
                maxLen = Math.Max(maxLen, currentLen);
            }
        }
        
        return maxLen;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.LongestConsecutive(new int[] {100, 4, 200, 1, 3, 2})); // Output: 4
        Console.WriteLine(sol.LongestConsecutive(new int[] {0, 3, 7, 2, 5, 8, 4, 6, 0, 1})); // Output: 9
    }
}
