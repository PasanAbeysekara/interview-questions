# Remove Duplicates from Sorted Array (in-place)
# Time: O(n), Space: O(1)

from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        write_idx = 1
        
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[write_idx] = nums[i]
                write_idx += 1
        
        return write_idx

# Test
if __name__ == "__main__":
    sol = Solution()
    nums = [1, 1, 2, 2, 3, 4, 4]
    new_len = sol.removeDuplicates(nums)
    print(f"Length: {new_len}, Array: {nums[:new_len]}")
    # Output: Length: 4, Array: [1, 2, 3, 4]
