// Kth Smallest Element in Array
// Time: O(n) average with quickselect, O(n log k) with heap
// Space: O(1) quickselect / O(k) heap

#include <iostream>
#include <vector>
#include <algorithm>
#include <cstdlib>
#include <ctime>

using namespace std;

class Solution {
public:
    // Using quickselect - O(n) average
    int findKthSmallest(vector<int>& nums, int k) {
        srand(time(0));
        return quickselect(nums, 0, nums.size() - 1, k - 1);
    }
    
private:
    int quickselect(vector<int>& nums, int left, int right, int kSmallest) {
        if (left == right) return nums[left];
        
        int pivotIdx = left + rand() % (right - left + 1);
        pivotIdx = partition(nums, left, right, pivotIdx);
        
        if (kSmallest == pivotIdx) {
            return nums[kSmallest];
        } else if (kSmallest < pivotIdx) {
            return quickselect(nums, left, pivotIdx - 1, kSmallest);
        } else {
            return quickselect(nums, pivotIdx + 1, right, kSmallest);
        }
    }
    
    int partition(vector<int>& nums, int left, int right, int pivotIdx) {
        int pivot = nums[pivotIdx];
        swap(nums[pivotIdx], nums[right]);
        int storeIdx = left;
        
        for (int i = left; i < right; i++) {
            if (nums[i] < pivot) {
                swap(nums[storeIdx], nums[i]);
                storeIdx++;
            }
        }
        
        swap(nums[right], nums[storeIdx]);
        return storeIdx;
    }
};

// Test
int main() {
    Solution sol;
    vector<int> nums1 = {3, 2, 1, 5, 6, 4};
    cout << sol.findKthSmallest(nums1, 2) << endl;  // 2
    
    vector<int> nums2 = {3, 2, 3, 1, 2, 4, 5, 5, 6};
    cout << sol.findKthSmallest(nums2, 4) << endl;  // 3
    
    return 0;
}
