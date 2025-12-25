# Evaluate Reverse Polish Notation
# Time: O(n), Space: O(n)

from typing import List

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        
        for token in tokens:
            if token in ['+', '-', '*', '/']:
                b = stack.pop()
                a = stack.pop()
                if token == '+':
                    stack.append(a + b)
                elif token == '-':
                    stack.append(a - b)
                elif token == '*':
                    stack.append(a * b)
                else:  # division
                    # Truncate toward zero
                    stack.append(int(a / b))
            else:
                stack.append(int(token))
        
        return stack[0]

# Test
if __name__ == "__main__":
    sol = Solution()
    print(sol.evalRPN(["2", "1", "+", "3", "*"]))  # 9
    print(sol.evalRPN(["4", "13", "5", "/", "+"]))  # 6
