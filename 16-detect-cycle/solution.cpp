// Detect Cycle in Linked List (Floyd's Cycle Detection)
// Time: O(n), Space: O(1)

#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    bool hasCycle(ListNode* head) {
        if (!head || !head->next) {
            return false;
        }
        
        ListNode* slow = head;
        ListNode* fast = head;
        
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) {
                return true;
            }
        }
        
        return false;
    }
    
    ListNode* detectCycle(ListNode* head) {
        if (!head || !head->next) {
            return nullptr;
        }
        
        ListNode* slow = head;
        ListNode* fast = head;
        
        // Find meeting point
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if (slow == fast) {
                break;
            }
        }
        
        if (!fast || !fast->next) {
            return nullptr;
        }
        
        // Find cycle start
        slow = head;
        while (slow != fast) {
            slow = slow->next;
            fast = fast->next;
        }
        
        return slow;
    }
};

int main() {
    ListNode* head = new ListNode(1);
    ListNode* node2 = new ListNode(2);
    ListNode* node3 = new ListNode(3);
    ListNode* node4 = new ListNode(4);
    head->next = node2;
    node2->next = node3;
    node3->next = node4;
    node4->next = node2;
    
    Solution sol;
    cout << boolalpha << sol.hasCycle(head) << endl;  // true
    ListNode* cycleNode = sol.detectCycle(head);
    cout << (cycleNode ? to_string(cycleNode->val) : "null") << endl;  // 2
    return 0;
}
