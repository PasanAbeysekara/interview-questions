// Remove Duplicates from Sorted Array (in-place)
// Time: O(n), Space: O(1)

public class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        
        int writeIdx = 1;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[writeIdx] = nums[i];
                writeIdx++;
            }
        }
        
        return writeIdx;
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = {1, 1, 2, 2, 3, 4, 4};
        int newLen = sol.removeDuplicates(nums);
        System.out.print("Length: " + newLen + ", Array: ");
        for (int i = 0; i < newLen; i++) {
            System.out.print(nums[i] + " ");
        }
        // Output: Length: 4, Array: 1 2 3 4
    }
}
