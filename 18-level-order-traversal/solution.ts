// Binary Tree Level Order Traversal (BFS)
// Time: O(n), Space: O(n)

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
    levelOrder(root: TreeNode | null): number[][] {
        if (!root) {
            return [];
        }
        
        const result: number[][] = [];
        const queue: TreeNode[] = [root];
        
        while (queue.length > 0) {
            const levelSize = queue.length;
            const level: number[] = [];
            
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift()!;
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

export { Solution, TreeNode };
