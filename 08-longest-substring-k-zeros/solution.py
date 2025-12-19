# Longest Substring with at Most K Zeros
# Time: O(n), Space: O(1)

class Solution:
    def longestOnes(self, s: str, k: int) -> int:
        max_len = 0
        left = 0
        zero_count = 0
        
        for right in range(len(s)):
            if s[right] == '0':
                zero_count += 1
            
            while zero_count > k:
                if s[left] == '0':
                    zero_count -= 1
                left += 1
            
            max_len = max(max_len, right - left + 1)
        
        return max_len

# Test
if __name__ == "__main__":
    sol = Solution()
    print(sol.longestOnes("1101100111", 2))  # Output: 8
    print(sol.longestOnes("000111", 2))      # Output: 5
