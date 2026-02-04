// Meeting Rooms II - Minimum Number of Meeting Rooms
// Time: O(n log n), Space: O(n)

import java.util.*;

public class Solution {
    public int minMeetingRooms(int[][] intervals) {
        if (intervals == null || intervals.length == 0) {
            return 0;
        }
        
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        heap.offer(intervals[0][1]);
        
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= heap.peek()) {
                heap.poll();
            }
            heap.offer(intervals[i][1]);
        }
        
        return heap.size();
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.minMeetingRooms(new int[][]{{0, 30}, {5, 10}, {15, 20}}));  // 2
        System.out.println(sol.minMeetingRooms(new int[][]{{7, 10}, {2, 4}}));  // 1
    }
}
