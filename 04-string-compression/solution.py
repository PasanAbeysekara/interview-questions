# String Compression
# Return compressed string only if it's shorter than original
# Time: O(n), Space: O(n)

class Solution:
    def compress(self, s: str) -> str:
        if not s:
            return s
        
        compressed = []
        count = 1
        
        for i in range(1, len(s) + 1):
            if i < len(s) and s[i] == s[i - 1]:
                count += 1
            else:
                compressed.append(s[i - 1] + str(count))
                count = 1
        
        result = ''.join(compressed)
        # Return original if compressed is not shorter
        return result if len(result) < len(s) else s

# Test
if __name__ == "__main__":
    sol = Solution()
    print(sol.compress("aaabbc"))   # Output: a3b2c1
    print(sol.compress("abc"))      # Output: abc (original)
    print(sol.compress("aabbcc"))   # Output: aabbcc (original)
