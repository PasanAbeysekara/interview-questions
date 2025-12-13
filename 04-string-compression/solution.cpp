// String Compression
// Return compressed string only if it's shorter than original
// Time: O(n), Space: O(n)

#include <string>
#include <iostream>

using namespace std;

class Solution {
public:
    string compress(string s) {
        if (s.empty()) {
            return s;
        }
        
        string compressed;
        int count = 1;
        
        for (int i = 1; i <= s.length(); i++) {
            if (i < s.length() && s[i] == s[i - 1]) {
                count++;
            } else {
                compressed += s[i - 1];
                compressed += to_string(count);
                count = 1;
            }
        }
        
        // Return original if compressed is not shorter
        return compressed.length() < s.length() ? compressed : s;
    }
};

// Test
int main() {
    Solution sol;
    cout << sol.compress("aaabbc") << endl;   // Output: a3b2c1
    cout << sol.compress("abc") << endl;      // Output: abc (original)
    cout << sol.compress("aabbcc") << endl;   // Output: aabbcc (original)
    return 0;
}
