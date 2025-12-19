// Minimum Size Subarray Sum
// Find minimal length of contiguous subarray with sum >= target
// Time: O(n), Space: O(1)

public class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int minLen = Integer.MAX_VALUE;
        int left = 0;
        int sum = 0;
        
        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            
            while (sum >= target) {
                minLen = Math.min(minLen, right - left + 1);
                sum -= nums[left];
                left++;
            }
        }
        
        return minLen == Integer.MAX_VALUE ? 0 : minLen;
    }
    
    // Test
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.minSubArrayLen(7, new int[]{2, 3, 1, 2, 4, 3})); // Output: 2
        System.out.println(sol.minSubArrayLen(4, new int[]{1, 4, 4}));          // Output: 1
        System.out.println(sol.minSubArrayLen(11, new int[]{1, 1, 1, 1, 1}));   // Output: 0
    }
}
