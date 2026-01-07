// Binary Tree Level Order Traversal (BFS)
// Time: O(n), Space: O(n)

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    levelOrder(root) {
        if (!root) {
            return [];
        }
        
        const result = [];
        const queue = [root];
        
        while (queue.length > 0) {
            const levelSize = queue.length;
            const level = [];
            
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                level.push(node.val);
                
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
            
            result.push(level);
        }
        
        return result;
    }
}

// Test
if (require.main === module) {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
    
    const sol = new Solution();
    console.log(sol.levelOrder(root));  // [[3], [9, 20], [15, 7]]
}

module.exports = { Solution, TreeNode };
