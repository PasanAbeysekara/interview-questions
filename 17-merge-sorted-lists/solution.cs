// Merge Two Sorted Linked Lists
// Time: O(m + n), Space: O(1)

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
    public ListNode MergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        
        curr.next = l1 ?? l2;
        
        return dummy.next;
    }
    
    public static void Main(string[] args) {
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        ListNode l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        
        Solution sol = new Solution();
        ListNode merged = sol.MergeTwoLists(l1, l2);
        
        while (merged != null) {
            Console.Write(merged.val + (merged.next != null ? " " : "\n"));
            merged = merged.next;
        }
    }
}
