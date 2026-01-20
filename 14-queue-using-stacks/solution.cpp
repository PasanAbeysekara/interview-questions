// Implement Queue using Two Stacks
// Time: O(1) amortized for push/pop, Space: O(n)

#include <iostream>
#include <stack>
using namespace std;

class MyQueue {
private:
    stack<int> stackIn;
    stack<int> stackOut;
    
    void move() {
        if (stackOut.empty()) {
            while (!stackIn.empty()) {
                stackOut.push(stackIn.top());
                stackIn.pop();
            }
        }
    }
    
public:
    MyQueue() {}
    
    void push(int x) {
        stackIn.push(x);
    }
    
    int pop() {
        move();
        int val = stackOut.top();
        stackOut.pop();
        return val;
    }
    
    int peek() {
        move();
        return stackOut.top();
    }
    
    bool empty() {
        return stackIn.empty() && stackOut.empty();
    }
};

int main() {
    MyQueue q;
    q.push(1);
    q.push(2);
    cout << q.peek() << endl;  // 1
    cout << q.pop() << endl;   // 1
    cout << boolalpha << q.empty() << endl; // false
    return 0;
}
