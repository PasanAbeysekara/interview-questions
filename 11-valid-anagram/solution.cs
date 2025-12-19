// Valid Anagram
// Time: O(n), Space: O(1) - fixed charset size
// Unicode handling: Dictionary works with Unicode

using System;
using System.Collections.Generic;

public class Solution {
    // Basic approach for ASCII
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) {
            return false;
        }
        
        int[] count = new int[26];
        
        for (int i = 0; i < s.Length; i++) {
            count[s[i] - 'a']++;
            count[t[i] - 'a']--;
        }
        
        foreach (int c in count) {
            if (c != 0) {
                return false;
            }
        }
        
        return true;
    }
    
    // Unicode-compatible approach
    public bool IsAnagramUnicode(string s, string t) {
        if (s.Length != t.Length) {
            return false;
        }
        
        Dictionary<char, int> count = new Dictionary<char, int>();
        
        foreach (char c in s) {
            if (!count.ContainsKey(c)) {
                count[c] = 0;
            }
            count[c]++;
        }
        
        foreach (char c in t) {
            if (!count.ContainsKey(c)) {
                return false;
            }
            count[c]--;
            if (count[c] == 0) {
                count.Remove(c);
            }
        }
        
        return count.Count == 0;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.IsAnagram("anagram", "nagaram")); // True
        Console.WriteLine(sol.IsAnagram("rat", "car"));         // False
        Console.WriteLine(sol.IsAnagramUnicode("测试", "试测")); // True (Unicode)
    }
}
