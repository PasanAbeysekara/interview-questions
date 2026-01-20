// Valid Parentheses
// Time: O(n), Space: O(n)

using System;
using System.Collections.Generic;

public class Solution {
    public bool IsValid(string s) {
        Stack<char> stack = new Stack<char>();
        Dictionary<char, char> mapping = new Dictionary<char, char> {
            {')', '('},
            {'}', '{'},
            {']', '['}
        };
        
        foreach (char c in s) {
            if (mapping.ContainsKey(c)) {
                char top = stack.Count > 0 ? stack.Pop() : '#';
                if (mapping[c] != top) {
                    return false;
                }
            } else {
                stack.Push(c);
            }
        }
        
        return stack.Count == 0;
    }
    
    public static void Main(string[] args) {
        Solution sol = new Solution();
        Console.WriteLine(sol.IsValid("()[]{}"));   // True
        Console.WriteLine(sol.IsValid("([)]"));     // False
        Console.WriteLine(sol.IsValid("{[]}"));     // True
    }
}
