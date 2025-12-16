// Valid Anagram
// Time: O(n), Space: O(1) - fixed charset size
// Unicode handling: Use unordered_map instead of array

#include <string>
#include <unordered_map>
#include <iostream>

using namespace std;

class Solution {
public:
    // Basic approach for ASCII
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }
        
        int count[26] = {0};
        
        for (int i = 0; i < s.length(); i++) {
            count[s[i] - 'a']++;
            count[t[i] - 'a']--;
        }
        
        for (int c : count) {
            if (c != 0) {
                return false;
            }
        }
        
        return true;
    }
    
    // Unicode-compatible approach
    bool isAnagramUnicode(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }
        
        unordered_map<char, int> count;
        
        for (char c : s) {
            count[c]++;
        }
        
        for (char c : t) {
            if (count.find(c) == count.end()) {
                return false;
            }
            count[c]--;
            if (count[c] == 0) {
                count.erase(c);
            }
        }
        
        return count.empty();
    }
};

// Test
int main() {
    Solution sol;
    cout << boolalpha;
    cout << sol.isAnagram("anagram", "nagaram") << endl; // true
    cout << sol.isAnagram("rat", "car") << endl;         // false
    return 0;
}
