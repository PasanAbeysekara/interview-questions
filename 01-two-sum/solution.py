# Two Sum - Return indices of two numbers that add up to target
# Time: O(n), Space: O(n)

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        
        raise ValueError("No solution found")

# Test
if __name__ == "__main__":
    sol = Solution()
    result = sol.twoSum([2, 7, 11, 15], 9)
    print(result)  # Output: [0, 1]
