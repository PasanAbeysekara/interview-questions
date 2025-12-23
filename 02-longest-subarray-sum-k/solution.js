// Longest Subarray with Sum K
// Time: O(n), Space: O(n)

class Solution {
    longestSubarrayWithSumK(arr, k) {
        const prefixSumMap = new Map();
        let sumVal = 0;
        let maxLen = 0;
        
        for (let i = 0; i < arr.length; i++) {
            sumVal += arr[i];
            
            if (sumVal === k) {
                maxLen = i + 1;
            }
            
            if (prefixSumMap.has(sumVal - k)) {
                maxLen = Math.max(maxLen, i - prefixSumMap.get(sumVal - k));
            }
            
            if (!prefixSumMap.has(sumVal)) {
                prefixSumMap.set(sumVal, i);
            }
        }
        
        return maxLen;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.longestSubarrayWithSumK([1, 2, 3, 1, 1, 1, 1], 3));  // Output: 3
}

module.exports = Solution;
