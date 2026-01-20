# Detect Cycle in Linked List (Floyd's Cycle Detection)
# Time: O(n), Space: O(1)

class ListNode:
    def __init__(self, val=0):
        self.val = val
        self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        if not head or not head.next:
            return False
        
        slow = head
        fast = head
        
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True
        
        return False
    
    def detectCycle(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return None
        
        slow = head
        fast = head
        
        # Find meeting point
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                break
        
        if not fast or not fast.next:
            return None
        
        # Find cycle start
        slow = head
        while slow != fast:
            slow = slow.next
            fast = fast.next
        
        return slow

# Test
if __name__ == "__main__":
    # Create cycle: 1 -> 2 -> 3 -> 4 -> 2
    head = ListNode(1)
    node2 = ListNode(2)
    node3 = ListNode(3)
    node4 = ListNode(4)
    head.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node2
    
    sol = Solution()
    print(sol.hasCycle(head))  # True
    cycleNode = sol.detectCycle(head)
    print(cycleNode.val if cycleNode else None)  # 2
