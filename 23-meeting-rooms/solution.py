# Meeting Rooms II - Minimum Number of Meeting Rooms
# Time: O(n log n), Space: O(n)

from typing import List
import heapq

class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        if not intervals:
            return 0
        
        intervals.sort(key=lambda x: x[0])
        heap = []  # Min heap to track end times
        
        heapq.heappush(heap, intervals[0][1])
        
        for i in range(1, len(intervals)):
            if intervals[i][0] >= heap[0]:
                heapq.heappop(heap)
            
            heapq.heappush(heap, intervals[i][1])
        
        return len(heap)

# Test
if __name__ == "__main__":
    sol = Solution()
    print(sol.minMeetingRooms([[0, 30], [5, 10], [15, 20]]))  # 2
    print(sol.minMeetingRooms([[7, 10], [2, 4]]))  # 1
