// Top K Frequent Elements
// Time: O(n log k), Space: O(n) using min heap

using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        // Count frequencies
        Dictionary<int, int> freqMap = new Dictionary<int, int>();
        foreach (int num in nums) {
            if (!freqMap.ContainsKey(num)) {
                freqMap[num] = 0;
            }
            freqMap[num]++;
        }
        
        // Sort by frequency and take top k
        return freqMap.OrderByDescending(x => x.Value)
                      .Take(k)
                      .Select(x => x.Key)
                      .ToArray();
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        int[] result = sol.TopKFrequent(new int[] {1, 1, 1, 2, 2, 3}, 2);
        Console.WriteLine("[" + string.Join(", ", result) + "]"); // Output: [1, 2]
    }
}
