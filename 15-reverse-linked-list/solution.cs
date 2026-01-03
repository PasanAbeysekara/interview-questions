// Reverse Linked List (Iterative and Recursive)
// Time: O(n), Space: O(1) iterative / O(n) recursive

using System;

public class ListNode {
    public int val;
    public ListNode next;
    
    public ListNode(int val = 0, ListNode next = null) {
        this.val = val;
        this.next = next;
    }
}

public class Solution {
    public ListNode ReverseListIterative(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        
        return prev;
    }
    
    public ListNode ReverseListRecursive(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        
        ListNode newHead = ReverseListRecursive(head.next);
        head.next.next = head;
        head.next = null;
        
        return newHead;
    }
    
    public static void Main(string[] args) {
        ListNode head = new ListNode(1, new ListNode(2, new ListNode(3)));
        Solution sol = new Solution();
        ListNode reversedHead = sol.ReverseListIterative(head);
        ListNode curr = reversedHead;
        while (curr != null) {
            Console.Write(curr.val + (curr.next != null ? " -> " : "\n"));
            curr = curr.next;
        }
    }
}
