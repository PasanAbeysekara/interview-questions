// Implement Queue using Two Stacks
// Time: O(1) amortized for push/pop, Space: O(n)

import java.util.*;

class MyQueue {
    private Stack<Integer> stackIn;
    private Stack<Integer> stackOut;
    
    public MyQueue() {
        stackIn = new Stack<>();
        stackOut = new Stack<>();
    }
    
    public void push(int x) {
        stackIn.push(x);
    }
    
    public int pop() {
        move();
        return stackOut.pop();
    }
    
    public int peek() {
        move();
        return stackOut.peek();
    }
    
    public boolean empty() {
        return stackIn.isEmpty() && stackOut.isEmpty();
    }
    
    private void move() {
        if (stackOut.isEmpty()) {
            while (!stackIn.isEmpty()) {
                stackOut.push(stackIn.pop());
            }
        }
    }
    
    public static void main(String[] args) {
        MyQueue q = new MyQueue();
        q.push(1);
        q.push(2);
        System.out.println(q.peek());  // 1
        System.out.println(q.pop());   // 1
        System.out.println(q.empty()); // false
    }
}
