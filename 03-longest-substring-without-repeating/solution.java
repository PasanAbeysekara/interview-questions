// Longest Substring Without Repeating Characters
// Time: O(n), Space: O(min(n, m)) where m is charset size

import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> charIndex = new HashMap<>();
        int maxLen = 0;
        int left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            
            if (charIndex.containsKey(c) && charIndex.get(c) >= left) {
                left = charIndex.get(c) + 1;
            }
            
            charIndex.put(c, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.lengthOfLongestSubstring("abcabcbb")); // Output: 3
        System.out.println(sol.lengthOfLongestSubstring("bbbbb"));    // Output: 1
        System.out.println(sol.lengthOfLongestSubstring("pwwkew"));   // Output: 3
    }
}
