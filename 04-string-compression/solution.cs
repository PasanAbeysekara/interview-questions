// String Compression
// Return compressed string only if it's shorter than original
// Time: O(n), Space: O(n)

using System;
using System.Text;

public class Solution {
    public string Compress(string s) {
        if (string.IsNullOrEmpty(s)) {
            return s;
        }
        
        StringBuilder compressed = new StringBuilder();
        int count = 1;
        
        for (int i = 1; i <= s.Length; i++) {
            if (i < s.Length && s[i] == s[i - 1]) {
                count++;
            } else {
                compressed.Append(s[i - 1]).Append(count);
                count = 1;
            }
        }
        
        string result = compressed.ToString();
        // Return original if compressed is not shorter
        return result.Length < s.Length ? result : s;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.Compress("aaabbc"));   // Output: a3b2c1
        Console.WriteLine(sol.Compress("abc"));      // Output: abc (original)
        Console.WriteLine(sol.Compress("aabbcc"));   // Output: aabbcc (original)
    }
}
