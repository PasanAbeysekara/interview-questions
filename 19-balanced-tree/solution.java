// Height-Balanced Binary Tree
// Time: O(n), Space: O(h) where h is height

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
    public boolean isBalanced(TreeNode root) {
        return height(root) != -1;
    }
    
    private int height(TreeNode node) {
        if (node == null) return 0;
        
        int leftHeight = height(node.left);
        if (leftHeight == -1) return -1;
        
        int rightHeight = height(node.right);
        if (rightHeight == -1) return -1;
        
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        // Balanced tree
        TreeNode root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        // Unbalanced tree
        TreeNode root2 = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);
        
        System.out.println(sol.isBalanced(root1));  // true
        System.out.println(sol.isBalanced(root2));  // false
    }
}
