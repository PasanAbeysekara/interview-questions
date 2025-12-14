// Longest Substring with at Most K Zeros
// Time: O(n), Space: O(1)

#include <string>
#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
public:
    int longestOnes(string s, int k) {
        int maxLen = 0;
        int left = 0;
        int zeroCount = 0;
        
        for (int right = 0; right < s.length(); right++) {
            if (s[right] == '0') {
                zeroCount++;
            }
            
            while (zeroCount > k) {
                if (s[left] == '0') {
                    zeroCount--;
                }
                left++;
            }
            
            maxLen = max(maxLen, right - left + 1);
        }
        
        return maxLen;
    }
};

// Test
int main() {
    Solution sol;
    cout << sol.longestOnes("1101100111", 2) << endl; // Output: 8
    cout << sol.longestOnes("000111", 2) << endl;     // Output: 5
    return 0;
}
