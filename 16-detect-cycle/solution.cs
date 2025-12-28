// Detect Cycle in Linked List (Floyd's Cycle Detection)
// Time: O(n), Space: O(1)

using System;

public class ListNode {
    public int val;
    public ListNode next;
    
    public ListNode(int val = 0) {
        this.val = val;
        this.next = null;
    }
}

public class Solution {
    public bool HasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }
        
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true;
            }
        }
        
        return false;
    }
    
    public ListNode DetectCycle(ListNode head) {
        if (head == null || head.next == null) {
            return null;
        }
        
        ListNode slow = head;
        ListNode fast = head;
        
        // Find meeting point
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                break;
            }
        }
        
        if (fast == null || fast.next == null) {
            return null;
        }
        
        // Find cycle start
        slow = head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        
        return slow;
    }
    
    public static void Main(string[] args) {
        ListNode head = new ListNode(1);
        ListNode node2 = new ListNode(2);
        ListNode node3 = new ListNode(3);
        ListNode node4 = new ListNode(4);
        head.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node2;
        
        Solution sol = new Solution();
        Console.WriteLine(sol.HasCycle(head));  // True
        ListNode cycleNode = sol.DetectCycle(head);
        Console.WriteLine(cycleNode != null ? cycleNode.val.ToString() : "null");  // 2
    }
}
