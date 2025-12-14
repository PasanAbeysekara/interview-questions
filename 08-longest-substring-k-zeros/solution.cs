// Longest Substring with at Most K Zeros
// Time: O(n), Space: O(1)

using System;

public class Solution {
    public int LongestOnes(string s, int k) {
        int maxLen = 0;
        int left = 0;
        int zeroCount = 0;
        
        for (int right = 0; right < s.Length; right++) {
            if (s[right] == '0') {
                zeroCount++;
            }
            
            while (zeroCount > k) {
                if (s[left] == '0') {
                    zeroCount--;
                }
                left++;
            }
            
            maxLen = Math.Max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.LongestOnes("1101100111", 2)); // Output: 8
        Console.WriteLine(sol.LongestOnes("000111", 2));     // Output: 5
    }
}
