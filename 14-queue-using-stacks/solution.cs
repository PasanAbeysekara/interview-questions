// Implement Queue using Two Stacks
// Time: O(1) amortized for push/pop, Space: O(n)

using System;
using System.Collections.Generic;

public class MyQueue {
    private Stack<int> stackIn;
    private Stack<int> stackOut;
    
    public MyQueue() {
        stackIn = new Stack<int>();
        stackOut = new Stack<int>();
    }
    
    public void Push(int x) {
        stackIn.Push(x);
    }
    
    public int Pop() {
        Move();
        return stackOut.Pop();
    }
    
    public int Peek() {
        Move();
        return stackOut.Peek();
    }
    
    public bool Empty() {
        return stackIn.Count == 0 && stackOut.Count == 0;
    }
    
    private void Move() {
        if (stackOut.Count == 0) {
            while (stackIn.Count > 0) {
                stackOut.Push(stackIn.Pop());
            }
        }
    }
    
    public static void Main(string[] args) {
        MyQueue q = new MyQueue();
        q.Push(1);
        q.Push(2);
        Console.WriteLine(q.Peek());  // 1
        Console.WriteLine(q.Pop());   // 1
        Console.WriteLine(q.Empty()); // False
    }
}
