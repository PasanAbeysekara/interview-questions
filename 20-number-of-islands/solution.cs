// Number of Islands (DFS)
// Time: O(m * n), Space: O(m * n)

using System;

public class Solution {
    public int NumIslands(char[][] grid) {
        if (grid == null || grid.Length == 0 || grid[0].Length == 0) {
            return 0;
        }
        
        int rows = grid.Length;
        int cols = grid[0].Length;
        int count = 0;
        
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1') {
                    count++;
                    Dfs(grid, r, c, rows, cols);
                }
            }
        }
        
        return count;
    }
    
    private void Dfs(char[][] grid, int r, int c, int rows, int cols) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] == '0') {
            return;
        }
        
        grid[r][c] = '0';  // Mark as visited
        Dfs(grid, r + 1, c, rows, cols);
        Dfs(grid, r - 1, c, rows, cols);
        Dfs(grid, r, c + 1, rows, cols);
        Dfs(grid, r, c - 1, rows, cols);
    }
    
    // Test
    public static void Main(string[] args) {
        Solution sol = new Solution();
        char[][] grid = {
            new char[] {'1', '1', '0', '0', '0'},
            new char[] {'1', '1', '0', '0', '0'},
            new char[] {'0', '0', '1', '0', '0'},
            new char[] {'0', '0', '0', '1', '1'}
        };
        Console.WriteLine(sol.NumIslands(grid));  // 3
    }
}
