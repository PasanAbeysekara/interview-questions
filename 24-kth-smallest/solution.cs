// Kth Smallest Element in Array
// Time: O(n) average with quickselect, O(n log k) with heap
// Space: O(1) quickselect / O(k) heap

using System;

public class Solution {
    private Random rand = new Random();
    
    // Using quickselect - O(n) average
    public int FindKthSmallest(int[] nums, int k) {
        return Quickselect(nums, 0, nums.Length - 1, k - 1);
    }
    
    private int Quickselect(int[] nums, int left, int right, int kSmallest) {
        if (left == right) return nums[left];
        
        int pivotIdx = left + rand.Next(right - left + 1);
        pivotIdx = Partition(nums, left, right, pivotIdx);
        
        if (kSmallest == pivotIdx) {
            return nums[kSmallest];
        } else if (kSmallest < pivotIdx) {
            return Quickselect(nums, left, pivotIdx - 1, kSmallest);
        } else {
            return Quickselect(nums, pivotIdx + 1, right, kSmallest);
        }
    }
    
    private int Partition(int[] nums, int left, int right, int pivotIdx) {
        int pivot = nums[pivotIdx];
        Swap(nums, pivotIdx, right);
        int storeIdx = left;
        
        for (int i = left; i < right; i++) {
            if (nums[i] < pivot) {
                Swap(nums, storeIdx, i);
                storeIdx++;
            }
        }
        
        Swap(nums, right, storeIdx);
        return storeIdx;
    }
    
    private void Swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.FindKthSmallest(new int[]{3, 2, 1, 5, 6, 4}, 2));  // 2
        Console.WriteLine(sol.FindKthSmallest(new int[]{3, 2, 3, 1, 2, 4, 5, 5, 6}, 4));  // 3
    }
}
