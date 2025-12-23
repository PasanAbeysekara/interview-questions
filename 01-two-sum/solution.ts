// Two Sum - Return indices of two numbers that add up to target
// Time: O(n), Space: O(n)

class Solution {
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number, number>();
        
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (seen.has(complement)) {
                return [seen.get(complement)!, i];
            }
            seen.set(nums[i], i);
        }
        
        throw new Error("No solution found");
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    const result = sol.twoSum([2, 7, 11, 15], 9);
    console.log(result);  // Output: [0, 1]
}

export default Solution;
