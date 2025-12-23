// Longest Substring with at Most K Zeros
// Time: O(n), Space: O(1)

class Solution {
    longestOnes(s: string, k: number): number {
        let maxLen = 0;
        let left = 0;
        let zeroCount = 0;
        
        for (let right = 0; right < s.length; right++) {
            if (s[right] === '0') {
                zeroCount++;
            }
            
            while (zeroCount > k) {
                if (s[left] === '0') {
                    zeroCount--;
                }
                left++;
            }
            
            maxLen = Math.max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.longestOnes("1101100111", 2));  // Output: 8
    console.log(sol.longestOnes("000111", 2));      // Output: 5
}

export default Solution;
