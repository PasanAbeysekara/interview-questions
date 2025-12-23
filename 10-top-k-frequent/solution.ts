// Top K Frequent Elements
// Time: O(n log k), Space: O(n) using sorting
// Alternative: O(n) using bucket sort

class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        // Count frequencies
        const freqMap = new Map<number, number>();
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        
        // Sort by frequency and get top k
        return Array.from(freqMap.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(entry => entry[0]);
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    const result = sol.topKFrequent([1, 1, 1, 2, 2, 3], 2);
    console.log(result);  // Output: [1, 2]
}

export default Solution;
