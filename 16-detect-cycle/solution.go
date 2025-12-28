// Detect Cycle in Linked List (Floyd's Cycle Detection)
// Time: O(n), Space: O(1)

package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

type Solution struct{}

func (s *Solution) HasCycle(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return false
	}
	
	slow := head
	fast := head
	
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
		if slow == fast {
			return true
		}
	}
	
	return false
}

func (s *Solution) DetectCycle(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return nil
	}
	
	slow := head
	fast := head
	
	// Find meeting point
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
		if slow == fast {
			break
		}
	}
	
	if fast == nil || fast.Next == nil {
		return nil
	}
	
	// Find cycle start
	slow = head
	for slow != fast {
		slow = slow.Next
		fast = fast.Next
	}
	
	return slow
}

func main() {
	head := &ListNode{Val: 1}
	node2 := &ListNode{Val: 2}
	node3 := &ListNode{Val: 3}
	node4 := &ListNode{Val: 4}
	head.Next = node2
	node2.Next = node3
	node3.Next = node4
	node4.Next = node2
	
	sol := &Solution{}
	fmt.Println(sol.HasCycle(head))  // true
	cycleNode := sol.DetectCycle(head)
	if cycleNode != nil {
		fmt.Println(cycleNode.Val)  // 2
	} else {
		fmt.Println("nil")
	}
}
