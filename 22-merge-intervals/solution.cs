// Merge Overlapping Intervals
// Time: O(n log n), Space: O(n)

using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public int[][] Merge(int[][] intervals) {
        if (intervals == null || intervals.Length == 0) {
            return new int[0][];
        }
        
        Array.Sort(intervals, (a, b) => a[0].CompareTo(b[0]));
        List<int[]> merged = new List<int[]>();
        merged.Add(intervals[0]);
        
        for (int i = 1; i < intervals.Length; i++) {
            int[] current = intervals[i];
            int[] last = merged[merged.Count - 1];
            
            if (current[0] <= last[1]) {
                last[1] = Math.Max(last[1], current[1]);
            } else {
                merged.Add(current);
            }
        }
        
        return merged.ToArray();
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        int[][] result1 = sol.Merge(new int[][] {
            new int[] {1, 3}, new int[] {2, 6}, new int[] {8, 10}, new int[] {15, 18}
        });
        Console.WriteLine(string.Join(", ", result1.Select(x => $"[{x[0]}, {x[1]}]")));
        // [1, 6], [8, 10], [15, 18]
        
        int[][] result2 = sol.Merge(new int[][] {new int[] {1, 4}, new int[] {4, 5}});
        Console.WriteLine(string.Join(", ", result2.Select(x => $"[{x[0]}, {x[1]}]")));
        // [1, 5]
    }
}
