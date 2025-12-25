// Evaluate Reverse Polish Notation
// Time: O(n), Space: O(n)

using System;
using System.Collections.Generic;

public class Solution {
    public int EvalRPN(string[] tokens) {
        Stack<int> stack = new Stack<int>();
        HashSet<string> operators = new HashSet<string> { "+", "-", "*", "/" };
        
        foreach (string token in tokens) {
            if (operators.Contains(token)) {
                int b = stack.Pop();
                int a = stack.Pop();
                switch (token) {
                    case "+":
                        stack.Push(a + b);
                        break;
                    case "-":
                        stack.Push(a - b);
                        break;
                    case "*":
                        stack.Push(a * b);
                        break;
                    case "/":
                        stack.Push(a / b);
                        break;
                }
            } else {
                stack.Push(int.Parse(token));
            }
        }
        
        return stack.Pop();
    }
    
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.EvalRPN(new string[] {"2", "1", "+", "3", "*"}));  // 9
        Console.WriteLine(sol.EvalRPN(new string[] {"4", "13", "5", "/", "+"}));  // 6
    }
}
