# Reverse Linked List (Iterative and Recursive)
# Time: O(n), Space: O(1) iterative / O(n) recursive

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseListIterative(self, head: ListNode) -> ListNode:
        prev = None
        curr = head
        
        while curr:
            next_temp = curr.next
            curr.next = prev
            prev = curr
            curr = next_temp
        
        return prev
    
    def reverseListRecursive(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head
        
        new_head = self.reverseListRecursive(head.next)
        head.next.next = head
        head.next = None
        
        return new_head

# Test
if __name__ == "__main__":
    # Create list: 1 -> 2 -> 3
    head = ListNode(1, ListNode(2, ListNode(3)))
    sol = Solution()
    reversed_head = sol.reverseListIterative(head)
    # Print: 3 -> 2 -> 1
    curr = reversed_head
    while curr:
        print(curr.val, end=" -> " if curr.next else "\n")
        curr = curr.next
