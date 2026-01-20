// Evaluate Reverse Polish Notation
// Time: O(n), Space: O(n)

package main

import (
	"fmt"
	"strconv"
)

type Solution struct{}

func (s *Solution) EvalRPN(tokens []string) int {
	stack := []int{}
	operators := map[string]bool{"+": true, "-": true, "*": true, "/": true}
	
	for _, token := range tokens {
		if operators[token] {
			b := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			a := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			
			switch token {
			case "+":
				stack = append(stack, a+b)
			case "-":
				stack = append(stack, a-b)
			case "*":
				stack = append(stack, a*b)
			case "/":
				stack = append(stack, a/b)
			}
		} else {
			num, _ := strconv.Atoi(token)
			stack = append(stack, num)
		}
	}
	
	return stack[0]
}

func main() {
	sol := &Solution{}
	fmt.Println(sol.EvalRPN([]string{"2", "1", "+", "3", "*"}))  // 9
	fmt.Println(sol.EvalRPN([]string{"4", "13", "5", "/", "+"}))  // 6
}
