// Valid Parentheses
// Time: O(n), Space: O(n)

class Solution {
    isValid(s: string): boolean {
        const stack: string[] = [];
        const mapping: Record<string, string> = { ')': '(', '}': '{', ']': '[' };
        
        for (const char of s) {
            if (char in mapping) {
                const top = stack.length > 0 ? stack.pop()! : '#';
                if (mapping[char] !== top) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        
        return stack.length === 0;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.isValid("()[]{}"));   // true
    console.log(sol.isValid("([)]"));     // false
    console.log(sol.isValid("{[]}"));     // true
}

export default Solution;
