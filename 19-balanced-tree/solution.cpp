// Height-Balanced Binary Tree
// Time: O(n), Space: O(h) where h is height

#include <iostream>
#include <algorithm>
#include <cmath>

using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    bool isBalanced(TreeNode* root) {
        return height(root) != -1;
    }
    
private:
    int height(TreeNode* node) {
        if (!node) return 0;
        
        int leftHeight = height(node->left);
        if (leftHeight == -1) return -1;
        
        int rightHeight = height(node->right);
        if (rightHeight == -1) return -1;
        
        if (abs(leftHeight - rightHeight) > 1) return -1;
        
        return max(leftHeight, rightHeight) + 1;
    }
};

// Test
int main() {
    Solution sol;
    // Balanced tree
    TreeNode* root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    // Unbalanced tree
    TreeNode* root2 = new TreeNode(1, new TreeNode(2, new TreeNode(3), nullptr), nullptr);
    
    cout << boolalpha << sol.isBalanced(root1) << endl;  // true
    cout << boolalpha << sol.isBalanced(root2) << endl;  // false
    
    return 0;
}
