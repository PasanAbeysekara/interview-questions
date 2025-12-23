// Remove Duplicates from Sorted Array (in-place)
// Time: O(n), Space: O(1)

class Solution {
    removeDuplicates(nums: number[]): number {
        if (nums.length === 0) {
            return 0;
        }
        
        let writeIdx = 1;
        
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                nums[writeIdx] = nums[i];
                writeIdx++;
            }
        }
        
        return writeIdx;
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    const nums = [1, 1, 2, 2, 3, 4, 4];
    const newLen = sol.removeDuplicates(nums);
    console.log(`Length: ${newLen}, Array: ${nums.slice(0, newLen)}`);
    // Output: Length: 4, Array: [1, 2, 3, 4]
}

export default Solution;
