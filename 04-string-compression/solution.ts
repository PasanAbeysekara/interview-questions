// String Compression
// Return compressed string only if it's shorter than original
// Time: O(n), Space: O(n)

class Solution {
    compress(s: string): string {
        if (!s) {
            return s;
        }
        
        const compressed: string[] = [];
        let count = 1;
        
        for (let i = 1; i <= s.length; i++) {
            if (i < s.length && s[i] === s[i - 1]) {
                count++;
            } else {
                compressed.push(s[i - 1] + count);
                count = 1;
            }
        }
        
        const result = compressed.join('');
        // Return original if compressed is not shorter
        return result.length < s.length ? result : s;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.compress("aaabbc"));   // Output: a3b2c1
    console.log(sol.compress("abc"));      // Output: abc (original)
    console.log(sol.compress("aabbcc"));   // Output: aabbcc (original)
}

export default Solution;
