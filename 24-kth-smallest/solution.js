// Kth Smallest Element in Array
// Time: O(n) average with quickselect, O(n log k) with heap
// Space: O(1) quickselect / O(k) heap

class Solution {
    // Using quickselect - O(n) average
    findKthSmallest(nums, k) {
        const quickselect = (left, right, kSmallest) => {
            if (left === right) return nums[left];
            
            const pivotIdx = left + Math.floor(Math.random() * (right - left + 1));
            const newPivotIdx = partition(left, right, pivotIdx);
            
            if (kSmallest === newPivotIdx) {
                return nums[kSmallest];
            } else if (kSmallest < newPivotIdx) {
                return quickselect(left, newPivotIdx - 1, kSmallest);
            } else {
                return quickselect(newPivotIdx + 1, right, kSmallest);
            }
        };
        
        const partition = (left, right, pivotIdx) => {
            const pivot = nums[pivotIdx];
            [nums[pivotIdx], nums[right]] = [nums[right], nums[pivotIdx]];
            let storeIdx = left;
            
            for (let i = left; i < right; i++) {
                if (nums[i] < pivot) {
                    [nums[storeIdx], nums[i]] = [nums[i], nums[storeIdx]];
                    storeIdx++;
                }
            }
            
            [nums[right], nums[storeIdx]] = [nums[storeIdx], nums[right]];
            return storeIdx;
        };
        
        return quickselect(0, nums.length - 1, k - 1);
    }
    
    // Using sort - O(n log n)
    findKthSmallestSort(nums, k) {
        nums.sort((a, b) => a - b);
        return nums[k - 1];
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.findKthSmallest([3, 2, 1, 5, 6, 4], 2));  // 2
    console.log(sol.findKthSmallestSort([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));  // 3
}

module.exports = Solution;
