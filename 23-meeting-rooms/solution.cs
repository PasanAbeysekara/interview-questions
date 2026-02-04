// Meeting Rooms II - Minimum Number of Meeting Rooms
// Time: O(n log n), Space: O(n)

using System;
using System.Collections.Generic;

public class Solution {
    public int MinMeetingRooms(int[][] intervals) {
        if (intervals == null || intervals.Length == 0) {
            return 0;
        }
        
        Array.Sort(intervals, (a, b) => a[0].CompareTo(b[0]));
        PriorityQueue<int, int> heap = new PriorityQueue<int, int>();
        heap.Enqueue(intervals[0][1], intervals[0][1]);
        
        for (int i = 1; i < intervals.Length; i++) {
            if (intervals[i][0] >= heap.Peek()) {
                heap.Dequeue();
            }
            heap.Enqueue(intervals[i][1], intervals[i][1]);
        }
        
        return heap.Count;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.MinMeetingRooms(new int[][] {
            new int[] {0, 30}, new int[] {5, 10}, new int[] {15, 20}
        }));  // 2
        Console.WriteLine(sol.MinMeetingRooms(new int[][] {
            new int[] {7, 10}, new int[] {2, 4}
        }));  // 1
    }
}
