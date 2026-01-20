// Evaluate Reverse Polish Notation
// Time: O(n), Space: O(n)

#include <iostream>
#include <vector>
#include <string>
#include <stack>
using namespace std;

class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> stk;
        
        for (const string& token : tokens) {
            if (token == "+" || token == "-" || token == "*" || token == "/") {
                int b = stk.top(); stk.pop();
                int a = stk.top(); stk.pop();
                if (token == "+") {
                    stk.push(a + b);
                } else if (token == "-") {
                    stk.push(a - b);
                } else if (token == "*") {
                    stk.push(a * b);
                } else {
                    stk.push(a / b);
                }
            } else {
                stk.push(stoi(token));
            }
        }
        
        return stk.top();
    }
};

int main() {
    Solution sol;
    vector<string> tokens1 = {"2", "1", "+", "3", "*"};
    vector<string> tokens2 = {"4", "13", "5", "/", "+"};
    cout << sol.evalRPN(tokens1) << endl;  // 9
    cout << sol.evalRPN(tokens2) << endl;  // 6
    return 0;
}
