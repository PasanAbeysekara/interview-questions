// Longest Subarray with Sum K
// Time: O(n), Space: O(n)

import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int longestSubarrayWithSumK(int[] arr, int k) {
        Map<Integer, Integer> prefixSumMap = new HashMap<>();
        int sum = 0;
        int maxLen = 0;
        
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            
            if (sum == k) {
                maxLen = i + 1;
            }
            
            if (prefixSumMap.containsKey(sum - k)) {
                maxLen = Math.max(maxLen, i - prefixSumMap.get(sum - k));
            }
            
            if (!prefixSumMap.containsKey(sum)) {
                prefixSumMap.put(sum, i);
            }
        }
        
        return maxLen;
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.longestSubarrayWithSumK(new int[]{1, 2, 3, 1, 1, 1, 1}, 3)); // Output: 3
    }
}
