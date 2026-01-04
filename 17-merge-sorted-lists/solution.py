# Merge Two Sorted Linked Lists
# Time: O(m + n), Space: O(1)

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode(0)
        curr = dummy
        
        while l1 and l2:
            if l1.val <= l2.val:
                curr.next = l1
                l1 = l1.next
            else:
                curr.next = l2
                l2 = l2.next
            curr = curr.next
        
        curr.next = l1 if l1 else l2
        
        return dummy.next

# Test
if __name__ == "__main__":
    # Create lists: 1->2->4 and 1->3->4
    l1 = ListNode(1, ListNode(2, ListNode(4)))
    l2 = ListNode(1, ListNode(3, ListNode(4)))
    
    sol = Solution()
    merged = sol.mergeTwoLists(l1, l2)
    
    curr = merged
    result = []
    while curr:
        result.append(curr.val)
        curr = curr.next
    print(result)  # [1, 1, 2, 3, 4, 4]
