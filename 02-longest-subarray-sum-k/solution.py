# Longest Subarray with Sum K
# Time: O(n), Space: O(n)

from typing import List

class Solution:
    def longestSubarrayWithSumK(self, arr: List[int], k: int) -> int:
        prefix_sum_map = {}
        sum_val = 0
        max_len = 0
        
        for i, num in enumerate(arr):
            sum_val += num
            
            if sum_val == k:
                max_len = i + 1
            
            if sum_val - k in prefix_sum_map:
                max_len = max(max_len, i - prefix_sum_map[sum_val - k])
            
            if sum_val not in prefix_sum_map:
                prefix_sum_map[sum_val] = i
        
        return max_len

# Test
if __name__ == "__main__":
    sol = Solution()
    print(sol.longestSubarrayWithSumK([1, 2, 3, 1, 1, 1, 1], 3))  # Output: 3
