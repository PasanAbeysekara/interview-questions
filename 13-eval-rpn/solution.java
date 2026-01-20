// Evaluate Reverse Polish Notation
// Time: O(n), Space: O(n)

import java.util.*;

class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        Set<String> operators = new HashSet<>(Arrays.asList("+", "-", "*", "/"));
        
        for (String token : tokens) {
            if (operators.contains(token)) {
                int b = stack.pop();
                int a = stack.pop();
                switch (token) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(a - b);
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                    case "/":
                        stack.push(a / b);
                        break;
                }
            } else {
                stack.push(Integer.parseInt(token));
            }
        }
        
        return stack.pop();
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.evalRPN(new String[]{"2", "1", "+", "3", "*"}));  // 9
        System.out.println(sol.evalRPN(new String[]{"4", "13", "5", "/", "+"}));  // 6
    }
}
