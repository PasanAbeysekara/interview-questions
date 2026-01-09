// Height-Balanced Binary Tree
// Time: O(n), Space: O(h) where h is height

using System;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
    public bool IsBalanced(TreeNode root) {
        return Height(root) != -1;
    }
    
    private int Height(TreeNode node) {
        if (node == null) return 0;
        
        int leftHeight = Height(node.left);
        if (leftHeight == -1) return -1;
        
        int rightHeight = Height(node.right);
        if (rightHeight == -1) return -1;
        
        if (Math.Abs(leftHeight - rightHeight) > 1) return -1;
        
        return Math.Max(leftHeight, rightHeight) + 1;
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        // Balanced tree
        TreeNode root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        // Unbalanced tree
        TreeNode root2 = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);
        
        Console.WriteLine(sol.IsBalanced(root1));  // True
        Console.WriteLine(sol.IsBalanced(root2));  // False
    }
}
