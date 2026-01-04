// Merge Two Sorted Linked Lists
// Time: O(m + n), Space: O(1)

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    mergeTwoLists(l1, l2) {
        const dummy = new ListNode(0);
        let curr = dummy;
        
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
    
    const result = [];
    while (merged) {
        result.push(merged.val);
        merged = merged.next;
    }
    console.log(result);  // [1, 1, 2, 3, 4, 4]
}

module.exports = { Solution, ListNode };
