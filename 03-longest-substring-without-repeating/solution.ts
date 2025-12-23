// Longest Substring Without Repeating Characters
// Time: O(n), Space: O(min(n, m)) where m is charset size

class Solution {
    lengthOfLongestSubstring(s: string): number {
        const charIndex = new Map<string, number>();
        let maxLen = 0;
        let left = 0;
        
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            if (charIndex.has(char) && charIndex.get(char)! >= left) {
                left = charIndex.get(char)! + 1;
            }
            
            charIndex.set(char, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.lengthOfLongestSubstring("abcabcbb"));  // Output: 3
    console.log(sol.lengthOfLongestSubstring("bbbbb"));     // Output: 1
    console.log(sol.lengthOfLongestSubstring("pwwkew"));    // Output: 3
}

export default Solution;
