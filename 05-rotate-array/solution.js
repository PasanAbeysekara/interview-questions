// Rotate Array to the right by k steps
// Time: O(n), Space: O(1) using reversal algorithm

class Solution {
    rotate(nums, k) {
        const n = nums.length;
        k = k % n;  // Handle k > n
        
        // Reverse entire array
        this.reverse(nums, 0, n - 1);
        // Reverse first k elements
        this.reverse(nums, 0, k - 1);
        // Reverse remaining elements
        this.reverse(nums, k, n - 1);
    }
    
    reverse(nums, start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    const nums = [1, 2, 3, 4, 5, 6, 7];
    sol.rotate(nums, 3);
    console.log(nums);  // Output: [5, 6, 7, 1, 2, 3, 4]
}

module.exports = Solution;
