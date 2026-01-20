// Valid Parentheses
// Time: O(n), Space: O(n)

package main

import "fmt"

type Solution struct{}

func (s *Solution) IsValid(str string) bool {
	stack := []rune{}
	mapping := map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}
	
	for _, c := range str {
		if match, exists := mapping[c]; exists {
			var top rune
			if len(stack) > 0 {
				top = stack[len(stack)-1]
				stack = stack[:len(stack)-1]
			} else {
				top = '#'
			}
			if match != top {
				return false
			}
		} else {
			stack = append(stack, c)
		}
	}
	
	return len(stack) == 0
}

func main() {
	sol := &Solution{}
	fmt.Println(sol.IsValid("()[]{}"))   // true
	fmt.Println(sol.IsValid("([)]"))     // false
	fmt.Println(sol.IsValid("{[]}"))     // true
}
