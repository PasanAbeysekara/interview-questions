// Longest Consecutive Sequence
// Time: O(n), Space: O(n)

class Solution {
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums);
        let maxLen = 0;
        
        for (const num of numSet) {
            // Only start counting from the beginning of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentLen = 1;
                
                while (numSet.has(currentNum + 1)) {
                    currentNum++;
                    currentLen++;
                }
                
                maxLen = Math.max(maxLen, currentLen);
            }
        }
        
        return maxLen;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.longestConsecutive([100, 4, 200, 1, 3, 2]));  // Output: 4
    console.log(sol.longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));  // Output: 9
}

export default Solution;
