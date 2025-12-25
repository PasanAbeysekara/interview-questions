// Evaluate Reverse Polish Notation
// Time: O(n), Space: O(n)

class Solution {
    evalRPN(tokens) {
        const stack = [];
        
        for (const token of tokens) {
            if (['+', '-', '*', '/'].includes(token)) {
                const b = stack.pop();
                const a = stack.pop();
                if (token === '+') {
                    stack.push(a + b);
                } else if (token === '-') {
                    stack.push(a - b);
                } else if (token === '*') {
                    stack.push(a * b);
                } else {  // division
                    // Truncate toward zero
                    stack.push(Math.trunc(a / b));
                }
            } else {
                stack.push(parseInt(token));
            }
        }
        
        return stack[0];
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.evalRPN(["2", "1", "+", "3", "*"]));  // 9
    console.log(sol.evalRPN(["4", "13", "5", "/", "+"]));  // 6
}

module.exports = Solution;
