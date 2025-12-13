// String Compression
// Return compressed string only if it's shorter than original
// Time: O(n), Space: O(n)

public class Solution {
    public String compress(String s) {
        if (s == null || s.length() == 0) {
            return s;
        }
        
        StringBuilder compressed = new StringBuilder();
        int count = 1;
        
        for (int i = 1; i <= s.length(); i++) {
            if (i < s.length() && s.charAt(i) == s.charAt(i - 1)) {
                count++;
            } else {
                compressed.append(s.charAt(i - 1)).append(count);
                count = 1;
            }
        }
        
        String result = compressed.toString();
        // Return original if compressed is not shorter
        return result.length() < s.length() ? result : s;
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.compress("aaabbc"));   // Output: a3b2c1
        System.out.println(sol.compress("abc"));      // Output: abc (original)
        System.out.println(sol.compress("aabbcc"));   // Output: aabbcc (original)
    }
}
