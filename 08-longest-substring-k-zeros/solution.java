// Longest Substring with at Most K Zeros
// Time: O(n), Space: O(1)

public class Solution {
    public int longestOnes(String s, int k) {
        int maxLen = 0;
        int left = 0;
        int zeroCount = 0;
        
        for (int right = 0; right < s.length(); right++) {
            if (s.charAt(right) == '0') {
                zeroCount++;
            }
            
            while (zeroCount > k) {
                if (s.charAt(left) == '0') {
                    zeroCount--;
                }
                left++;
            }
            
            maxLen = Math.max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.longestOnes("1101100111", 2)); // Output: 8
        System.out.println(sol.longestOnes("000111", 2));     // Output: 5
    }
}
