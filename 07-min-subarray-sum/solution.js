// Minimum Size Subarray Sum
// Find minimal length of contiguous subarray with sum >= target
// Time: O(n), Space: O(1)

class Solution {
    minSubArrayLen(target, nums) {
        let minLen = Infinity;
        let left = 0;
        let sumVal = 0;
        
        for (let right = 0; right < nums.length; right++) {
            sumVal += nums[right];
            
            while (sumVal >= target) {
                minLen = Math.min(minLen, right - left + 1);
                sumVal -= nums[left];
                left++;
            }
        }
        
        return minLen === Infinity ? 0 : minLen;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));  // Output: 2
    console.log(sol.minSubArrayLen(4, [1, 4, 4]));           // Output: 1
    console.log(sol.minSubArrayLen(11, [1, 1, 1, 1, 1]));    // Output: 0
}

module.exports = Solution;
