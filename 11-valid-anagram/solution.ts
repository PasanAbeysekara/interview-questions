// Valid Anagram
// Time: O(n), Space: O(1) - fixed charset size
// Unicode handling: Map works with Unicode by default

class Solution {
    // Basic approach
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        
        const count = new Map<string, number>();
        
        for (const char of s) {
            count.set(char, (count.get(char) || 0) + 1);
        }
        
        for (const char of t) {
            if (!count.has(char)) {
                return false;
            }
            const newCount = count.get(char)! - 1;
            if (newCount === 0) {
                count.delete(char);
            } else {
                count.set(char, newCount);
            }
        }
        
        return count.size === 0;
    }
    
    // Using object-based counting
    isAnagramObject(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        
        const count: Record<string, number> = {};
        for (const char of s) {
            count[char] = (count[char] || 0) + 1;
        }
        
        for (const char of t) {
            if (!count[char]) {
                return false;
            }
            count[char]--;
        }
        
        return Object.values(count).every(val => val === 0);
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.isAnagram("anagram", "nagaram"));  // true
    console.log(sol.isAnagram("rat", "car"));          // false
    console.log(sol.isAnagram("测试", "试测"));         // true (Unicode)
}

export default Solution;
