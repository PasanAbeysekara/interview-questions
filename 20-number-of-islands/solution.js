// Number of Islands (DFS)
// Time: O(m * n), Space: O(m * n)

class Solution {
    numIslands(grid) {
        if (!grid || !grid.length || !grid[0].length) return 0;
        
        const rows = grid.length;
        const cols = grid[0].length;
        let count = 0;
        
        const dfs = (r, c) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
                return;
            }
            
            grid[r][c] = '0';  // Mark as visited
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };
        
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === '1') {
                    count++;
                    dfs(r, c);
                }
            }
        }
        
        return count;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    const grid = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"]
    ];
    console.log(sol.numIslands(grid));  // 3
}

module.exports = Solution;
