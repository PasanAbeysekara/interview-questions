# Kth Smallest Element in Array
# Time: O(n) average with quickselect, O(n log k) with heap
# Space: O(1) quickselect / O(k) heap

from typing import List
import heapq
import random

class Solution:
    # Using min heap - O(n log k)
    def findKthSmallestHeap(self, nums: List[int], k: int) -> int:
        return heapq.nsmallest(k, nums)[-1]
    
    # Using quickselect - O(n) average
    def findKthSmallest(self, nums: List[int], k: int) -> int:
        def quickselect(left, right, k_smallest):
            if left == right:
                return nums[left]
            
            pivot_idx = random.randint(left, right)
            pivot_idx = partition(left, right, pivot_idx)
            
            if k_smallest == pivot_idx:
                return nums[k_smallest]
            elif k_smallest < pivot_idx:
                return quickselect(left, pivot_idx - 1, k_smallest)
            else:
                return quickselect(pivot_idx + 1, right, k_smallest)
        
        def partition(left, right, pivot_idx):
            pivot = nums[pivot_idx]
            nums[pivot_idx], nums[right] = nums[right], nums[pivot_idx]
            store_idx = left
            
            for i in range(left, right):
                if nums[i] < pivot:
                    nums[store_idx], nums[i] = nums[i], nums[store_idx]
                    store_idx += 1
            
            nums[right], nums[store_idx] = nums[store_idx], nums[right]
            return store_idx
        
        return quickselect(0, len(nums) - 1, k - 1)

# Test
if __name__ == "__main__":
    sol = Solution()
    print(sol.findKthSmallest([3, 2, 1, 5, 6, 4], 2))  # 2
    print(sol.findKthSmallestHeap([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))  # 3
