// Binary Tree Level Order Traversal (BFS)
// Time: O(n), Space: O(n)

package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type Solution struct{}

func (s *Solution) LevelOrder(root *TreeNode) [][]int {
	result := [][]int{}
	if root == nil {
		return result
	}
	
	queue := []*TreeNode{root}
	
	for len(queue) > 0 {
		levelSize := len(queue)
		level := []int{}
		
		for i := 0; i < levelSize; i++ {
			node := queue[0]
			queue = queue[1:]
			level = append(level, node.Val)
			
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
		
		result = append(result, level)
	}
	
	return result
}

func main() {
	root := &TreeNode{Val: 3}
	root.Left = &TreeNode{Val: 9}
	root.Right = &TreeNode{Val: 20, Left: &TreeNode{Val: 15}, Right: &TreeNode{Val: 7}}
	
	sol := &Solution{}
	fmt.Println(sol.LevelOrder(root))  // [[3] [9 20] [15 7]]
}
