// Reverse Linked List (Iterative and Recursive)
// Time: O(n), Space: O(1) iterative / O(n) recursive

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    reverseListIterative(head) {
        let prev = null;
        let curr = head;
        
        while (curr) {
            const nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        
        return prev;
    }
    
    reverseListRecursive(head) {
        if (!head || !head.next) {
            return head;
        }
        
        const newHead = this.reverseListRecursive(head.next);
        head.next.next = head;
        head.next = null;
        
        return newHead;
    }
}

// Test
if (require.main === module) {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    const sol = new Solution();
    let reversedHead = sol.reverseListIterative(head);
    let curr = reversedHead;
    const result = [];
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join(" -> "));  // 3 -> 2 -> 1
}

module.exports = { Solution, ListNode };
