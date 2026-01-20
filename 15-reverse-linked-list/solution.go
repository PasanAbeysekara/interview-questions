// Reverse Linked List (Iterative and Recursive)
// Time: O(n), Space: O(1) iterative / O(n) recursive

package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

type Solution struct{}

func (s *Solution) ReverseListIterative(head *ListNode) *ListNode {
	var prev *ListNode
	curr := head
	
	for curr != nil {
		nextTemp := curr.Next
		curr.Next = prev
		prev = curr
		curr = nextTemp
	}
	
	return prev
}

func (s *Solution) ReverseListRecursive(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
	
	newHead := s.ReverseListRecursive(head.Next)
	head.Next.Next = head
	head.Next = nil
	
	return newHead
}

func main() {
	head := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3}}}
	sol := &Solution{}
	reversedHead := sol.ReverseListIterative(head)
	curr := reversedHead
	for curr != nil {
		if curr.Next != nil {
			fmt.Printf("%d -> ", curr.Val)
		} else {
			fmt.Printf("%d\n", curr.Val)
		}
		curr = curr.Next
	}
}
