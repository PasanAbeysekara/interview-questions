// Merge Overlapping Intervals
// Time: O(n log n), Space: O(n)

class Solution {
    merge(intervals) {
        if (!intervals || intervals.length === 0) return [];
        
        intervals.sort((a, b) => a[0] - b[0]);
        const merged = [intervals[0]];
        
        for (let i = 1; i < intervals.length; i++) {
            const current = intervals[i];
            const last = merged[merged.length - 1];
            
            if (current[0] <= last[1]) {
                last[1] = Math.max(last[1], current[1]);
            } else {
                merged.push(current);
            }
        }
        
        return merged;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.merge([[1, 3], [2, 6], [8, 10], [15, 18]]));  // [[1, 6], [8, 10], [15, 18]]
    console.log(sol.merge([[1, 4], [4, 5]]));  // [[1, 5]]
}

module.exports = Solution;
