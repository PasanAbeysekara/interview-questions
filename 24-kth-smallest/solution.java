// Kth Smallest Element in Array
// Time: O(n) average with quickselect, O(n log k) with heap
// Space: O(1) quickselect / O(k) heap

import java.util.*;

public class Solution {
    private Random rand = new Random();
    
    // Using quickselect - O(n) average
    public int findKthSmallest(int[] nums, int k) {
        return quickselect(nums, 0, nums.length - 1, k - 1);
    }
    
    private int quickselect(int[] nums, int left, int right, int kSmallest) {
        if (left == right) return nums[left];
        
        int pivotIdx = left + rand.nextInt(right - left + 1);
        pivotIdx = partition(nums, left, right, pivotIdx);
        
        if (kSmallest == pivotIdx) {
            return nums[kSmallest];
        } else if (kSmallest < pivotIdx) {
            return quickselect(nums, left, pivotIdx - 1, kSmallest);
        } else {
            return quickselect(nums, pivotIdx + 1, right, kSmallest);
        }
    }
    
    private int partition(int[] nums, int left, int right, int pivotIdx) {
        int pivot = nums[pivotIdx];
        swap(nums, pivotIdx, right);
        int storeIdx = left;
        
        for (int i = left; i < right; i++) {
            if (nums[i] < pivot) {
                swap(nums, storeIdx, i);
                storeIdx++;
            }
        }
        
        swap(nums, right, storeIdx);
        return storeIdx;
    }
    
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.findKthSmallest(new int[]{3, 2, 1, 5, 6, 4}, 2));  // 2
        System.out.println(sol.findKthSmallest(new int[]{3, 2, 3, 1, 2, 4, 5, 5, 6}, 4));  // 3
    }
}
