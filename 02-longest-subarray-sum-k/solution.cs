// Longest Subarray with Sum K
// Time: O(n), Space: O(n)

using System;
using System.Collections.Generic;

public class Solution {
    public int LongestSubarrayWithSumK(int[] arr, int k) {
        Dictionary<int, int> prefixSumMap = new Dictionary<int, int>();
        int sum = 0;
        int maxLen = 0;
        
        for (int i = 0; i < arr.Length; i++) {
            sum += arr[i];
            
            if (sum == k) {
                maxLen = i + 1;
            }
            
            if (prefixSumMap.ContainsKey(sum - k)) {
                maxLen = Math.Max(maxLen, i - prefixSumMap[sum - k]);
            }
            
            if (!prefixSumMap.ContainsKey(sum)) {
                prefixSumMap[sum] = i;
            }
        }
        
        return maxLen;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.LongestSubarrayWithSumK(new int[] {1, 2, 3, 1, 1, 1, 1}, 3)); // Output: 3
    }
}
