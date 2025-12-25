// Valid Parentheses
// Time: O(n), Space: O(n)

#include <iostream>
#include <string>
#include <stack>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> stk;
        unordered_map<char, char> mapping = {
            {')', '('},
            {'}', '{'},
            {']', '['}
        };
        
        for (char c : s) {
            if (mapping.count(c)) {
                char top = stk.empty() ? '#' : stk.top();
                if (!stk.empty()) stk.pop();
                if (mapping[c] != top) {
                    return false;
                }
            } else {
                stk.push(c);
            }
        }
        
        return stk.empty();
    }
};

int main() {
    Solution sol;
    cout << boolalpha;
    cout << sol.isValid("()[]{}") << endl;   // true
    cout << sol.isValid("([)]") << endl;     // false
    cout << sol.isValid("{[]}") << endl;     // true
    return 0;
}
