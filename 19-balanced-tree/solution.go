// Height-Balanced Binary Tree
// Time: O(n), Space: O(h) where h is height

package main

import (
	"fmt"
	"math"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type Solution struct{}

func (s *Solution) isBalanced(root *TreeNode) bool {
	return s.height(root) != -1
}

func (s *Solution) height(node *TreeNode) int {
	if node == nil {
		return 0
	}
	
	leftHeight := s.height(node.Left)
	if leftHeight == -1 {
		return -1
	}
	
	rightHeight := s.height(node.Right)
	if rightHeight == -1 {
		return -1
	}
	
	if int(math.Abs(float64(leftHeight-rightHeight))) > 1 {
		return -1
	}
	
	if leftHeight > rightHeight {
		return leftHeight + 1
	}
	return rightHeight + 1
}

// Test
func main() {
	sol := &Solution{}
	// Balanced tree
	root1 := &TreeNode{Val: 1, Left: &TreeNode{Val: 2}, Right: &TreeNode{Val: 3}}
	// Unbalanced tree
	root2 := &TreeNode{Val: 1, Left: &TreeNode{Val: 2, Left: &TreeNode{Val: 3}}}
	
	fmt.Println(sol.isBalanced(root1)) // true
	fmt.Println(sol.isBalanced(root2)) // false
}
