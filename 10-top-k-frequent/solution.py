# Top K Frequent Elements
# Time: O(n log k), Space: O(n) using min heap
# Alternative: O(n) using bucket sort

from typing import List
import heapq
from collections import Counter

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Count frequencies
        freq_map = Counter(nums)
        
        # Use heap to get k most frequent
        # heapq.nlargest returns k largest elements
        return heapq.nlargest(k, freq_map.keys(), key=freq_map.get)

# Test
if __name__ == "__main__":
    sol = Solution()
    result = sol.topKFrequent([1, 1, 1, 2, 2, 3], 2)
    print(result)  # Output: [1, 2]
