// Reverse Linked List (Iterative and Recursive)
// Time: O(n), Space: O(1) iterative / O(n) recursive

#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode* next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* reverseListIterative(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        
        while (curr) {
            ListNode* nextTemp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextTemp;
        }
        
        return prev;
    }
    
    ListNode* reverseListRecursive(ListNode* head) {
        if (!head || !head->next) {
            return head;
        }
        
        ListNode* newHead = reverseListRecursive(head->next);
        head->next->next = head;
        head->next = nullptr;
        
        return newHead;
    }
};

int main() {
    ListNode* head = new ListNode(1, new ListNode(2, new ListNode(3)));
    Solution sol;
    ListNode* reversedHead = sol.reverseListIterative(head);
    ListNode* curr = reversedHead;
    while (curr) {
        cout << curr->val << (curr->next ? " -> " : "\n");
        curr = curr->next;
    }
    return 0;
}
