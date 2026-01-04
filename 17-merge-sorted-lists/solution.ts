// Merge Two Sorted Linked Lists
// Time: O(m + n), Space: O(1)

class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        const dummy = new ListNode(0);
        let curr: ListNode = dummy;
        
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        
        curr.next = l1 || l2;
        
        return dummy.next;
    }
}

// Test
if (require.main === module) {
    const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
    
    const sol = new Solution();
    let merged = sol.mergeTwoLists(l1, l2);
    
    const result: number[] = [];
    while (merged) {
        result.push(merged.val);
        merged = merged.next;
    }
    console.log(result);  // [1, 1, 2, 3, 4, 4]
}

export { Solution, ListNode };
