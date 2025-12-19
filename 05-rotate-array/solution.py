# Rotate Array to the right by k steps
# Time: O(n), Space: O(1) using reversal algorithm

from typing import List

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        n = len(nums)
        k = k % n  # Handle k > n
        
        # Reverse entire array
        self.reverse(nums, 0, n - 1)
        # Reverse first k elements
        self.reverse(nums, 0, k - 1)
        # Reverse remaining elements
        self.reverse(nums, k, n - 1)
    
    def reverse(self, nums: List[int], start: int, end: int) -> None:
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1

# Test
if __name__ == "__main__":
    sol = Solution()
    nums = [1, 2, 3, 4, 5, 6, 7]
    sol.rotate(nums, 3)
    print(nums)  # Output: [5, 6, 7, 1, 2, 3, 4]
