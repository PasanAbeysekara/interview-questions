# Valid Anagram
# Time: O(n), Space: O(1) - fixed charset size
# Unicode handling: Counter works with Unicode by default

from collections import Counter

class Solution:
    # Basic approach
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        count = {}
        
        for char in s:
            count[char] = count.get(char, 0) + 1
        
        for char in t:
            if char not in count:
                return False
            count[char] -= 1
            if count[char] == 0:
                del count[char]
        
        return len(count) == 0
    
    # Using Counter (handles Unicode automatically)
    def isAnagramCounter(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)

# Test
if __name__ == "__main__":
    sol = Solution()
    print(sol.isAnagram("anagram", "nagaram"))  # True
    print(sol.isAnagram("rat", "car"))          # False
    print(sol.isAnagramCounter("测试", "试测"))  # True (Unicode)
