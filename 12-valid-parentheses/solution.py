# Valid Parentheses
# Time: O(n), Space: O(n)

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {')': '(', '}': '{', ']': '['}
        
        for char in s:
            if char in mapping:
                top = stack.pop() if stack else '#'
                if mapping[char] != top:
                    return False
            else:
                stack.append(char)
        
        return len(stack) == 0

# Test
if __name__ == "__main__":
    sol = Solution()
    print(sol.isValid("()[]{}"))   # True
    print(sol.isValid("([)]"))     # False
    print(sol.isValid("{[]}"))     # True
