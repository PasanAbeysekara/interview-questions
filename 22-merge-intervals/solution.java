// Merge Overlapping Intervals
// Time: O(n log n), Space: O(n)

import java.util.*;

public class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals == null || intervals.length == 0) {
            return new int[0][];
        }
        
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> merged = new ArrayList<>();
        merged.add(intervals[0]);
        
        for (int i = 1; i < intervals.length; i++) {
            int[] current = intervals[i];
            int[] last = merged.get(merged.size() - 1);
            
            if (current[0] <= last[1]) {
                last[1] = Math.max(last[1], current[1]);
            } else {
                merged.add(current);
            }
        }
        
        return merged.toArray(new int[merged.size()][]);
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] result1 = sol.merge(new int[][]{{1, 3}, {2, 6}, {8, 10}, {15, 18}});
        System.out.println(Arrays.deepToString(result1));  // [[1, 6], [8, 10], [15, 18]]
        
        int[][] result2 = sol.merge(new int[][]{{1, 4}, {4, 5}});
        System.out.println(Arrays.deepToString(result2));  // [[1, 5]]
    }
}
