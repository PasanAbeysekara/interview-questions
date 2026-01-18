# Merge Overlapping Intervals
# Time: O(n log n), Space: O(n)

from typing import List

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        if not intervals:
            return []
        
        intervals.sort(key=lambda x: x[0])
        merged = [intervals[0]]
        
        for current in intervals[1:]:
            last = merged[-1]
            if current[0] <= last[1]:
                last[1] = max(last[1], current[1])
            else:
                merged.append(current)
        
        return merged

# Test
if __name__ == "__main__":
    sol = Solution()
    print(sol.merge([[1, 3], [2, 6], [8, 10], [15, 18]]))  # [[1, 6], [8, 10], [15, 18]]
    print(sol.merge([[1, 4], [4, 5]]))  # [[1, 5]]
