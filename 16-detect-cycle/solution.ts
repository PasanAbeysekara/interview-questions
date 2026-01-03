// Detect Cycle in Linked List (Floyd's Cycle Detection)
// Time: O(n), Space: O(1)

class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val: number = 0) {
        this.val = val;
        this.next = null;
    }
}

class Solution {
    hasCycle(head: ListNode | null): boolean {
        if (!head || !head.next) {
            return false;
        }
        
        let slow: ListNode | null = head;
        let fast: ListNode | null = head;
        
        while (fast && fast.next) {
            slow = slow!.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        
        return false;
    }
    
    detectCycle(head: ListNode | null): ListNode | null {
        if (!head || !head.next) {
            return null;
        }
        
        let slow: ListNode | null = head;
        let fast: ListNode | null = head;
        
        // Find meeting point
        while (fast && fast.next) {
            slow = slow!.next;
            fast = fast.next.next;
            if (slow === fast) {
                break;
            }
        }
        
        if (!fast || !fast.next) {
            return null;
        }
        
        // Find cycle start
        slow = head;
        while (slow !== fast) {
            slow = slow!.next;
            fast = fast!.next;
        }
        
        return slow;
    }
}

// Test
if (require.main === module) {
    const head = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;
    
    const sol = new Solution();
    console.log(sol.hasCycle(head));  // true
    const cycleNode = sol.detectCycle(head);
    console.log(cycleNode ? cycleNode.val : null);  // 2
}

export { Solution, ListNode };
