// Merge Two Sorted Linked Lists
// Time: O(m + n), Space: O(1)

package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

type Solution struct{}

func (s *Solution) MergeTwoLists(l1, l2 *ListNode) *ListNode {
	dummy := &ListNode{Val: 0}
	curr := dummy
	
	for l1 != nil && l2 != nil {
		if l1.Val <= l2.Val {
			curr.Next = l1
			l1 = l1.Next
		} else {
			curr.Next = l2
			l2 = l2.Next
		}
		curr = curr.Next
	}
	
	if l1 != nil {
		curr.Next = l1
	} else {
		curr.Next = l2
	}
	
	return dummy.Next
}

func main() {
	l1 := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 4}}}
	l2 := &ListNode{Val: 1, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4}}}
	
	sol := &Solution{}
	merged := sol.MergeTwoLists(l1, l2)
	
	for merged != nil {
		if merged.Next != nil {
			fmt.Printf("%d ", merged.Val)
		} else {
			fmt.Printf("%d\n", merged.Val)
		}
		merged = merged.Next
	}
}
