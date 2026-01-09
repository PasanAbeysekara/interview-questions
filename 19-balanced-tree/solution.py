# Height-Balanced Binary Tree
# Time: O(n), Space: O(h) where h is height

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def height(node):
            if not node:
                return 0
            
            left_height = height(node.left)
            if left_height == -1:
                return -1
            
            right_height = height(node.right)
            if right_height == -1:
                return -1
            
            if abs(left_height - right_height) > 1:
                return -1
            
            return max(left_height, right_height) + 1
        
        return height(root) != -1

# Test
if __name__ == "__main__":
    # Balanced tree
    root1 = TreeNode(1, TreeNode(2), TreeNode(3))
    # Unbalanced tree
    root2 = TreeNode(1, TreeNode(2, TreeNode(3)), None)
    
    sol = Solution()
    print(sol.isBalanced(root1))  # True
    print(sol.isBalanced(root2))  # False
