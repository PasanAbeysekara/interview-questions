# Minimum Size Subarray Sum
# Find minimal length of contiguous subarray with sum >= target
# Time: O(n), Space: O(1)

from typing import List

class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        min_len = float('inf')
        left = 0
        sum_val = 0
        
        for right in range(len(nums)):
            sum_val += nums[right]
            
            while sum_val >= target:
                min_len = min(min_len, right - left + 1)
                sum_val -= nums[left]
                left += 1
        
        return 0 if min_len == float('inf') else min_len

# Test
if __name__ == "__main__":
    sol = Solution()
    print(sol.minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))  # Output: 2
    print(sol.minSubArrayLen(4, [1, 4, 4]))           # Output: 1
    print(sol.minSubArrayLen(11, [1, 1, 1, 1, 1]))    # Output: 0
