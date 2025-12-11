// Longest Substring Without Repeating Characters
// Time: O(n), Space: O(min(n, m)) where m is charset size

using System;
using System.Collections.Generic;

public class Solution {
    public int LengthOfLongestSubstring(string s) {
        Dictionary<char, int> charIndex = new Dictionary<char, int>();
        int maxLen = 0;
        int left = 0;
        
        for (int right = 0; right < s.Length; right++) {
            char c = s[right];
            
            if (charIndex.ContainsKey(c) && charIndex[c] >= left) {
                left = charIndex[c] + 1;
            }
            
            charIndex[c] = right;
            maxLen = Math.Max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.LengthOfLongestSubstring("abcabcbb")); // Output: 3
        Console.WriteLine(sol.LengthOfLongestSubstring("bbbbb"));    // Output: 1
        Console.WriteLine(sol.LengthOfLongestSubstring("pwwkew"));   // Output: 3
    }
}
