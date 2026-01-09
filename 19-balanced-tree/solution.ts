// Height-Balanced Binary Tree
// Time: O(n), Space: O(h) where h is height

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    isBalanced(root: TreeNode | null): boolean {
        const height = (node: TreeNode | null): number => {
            if (!node) return 0;
            
            const leftHeight = height(node.left);
            if (leftHeight === -1) return -1;
            
            const rightHeight = height(node.right);
            if (rightHeight === -1) return -1;
            
            if (Math.abs(leftHeight - rightHeight) > 1) return -1;
            
            return Math.max(leftHeight, rightHeight) + 1;
        };
        
        return height(root) !== -1;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    // Balanced tree
    const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    // Unbalanced tree
    const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(3)), null);
    
    console.log(sol.isBalanced(root1));  // true
    console.log(sol.isBalanced(root2));  // false
}

export { Solution, TreeNode };
