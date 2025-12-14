// Minimum Size Subarray Sum
// Find minimal length of contiguous subarray with sum >= target
// Time: O(n), Space: O(1)

#include <vector>
#include <iostream>
#include <algorithm>
#include <climits>

using namespace std;

class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int minLen = INT_MAX;
        int left = 0;
        int sum = 0;
        
        for (int right = 0; right < nums.size(); right++) {
            sum += nums[right];
            
            while (sum >= target) {
                minLen = min(minLen, right - left + 1);
                sum -= nums[left];
                left++;
            }
        }
        
        return minLen == INT_MAX ? 0 : minLen;
    }
};

// Test
int main() {
    Solution sol;
    vector<int> nums1 = {2, 3, 1, 2, 4, 3};
    vector<int> nums2 = {1, 4, 4};
    vector<int> nums3 = {1, 1, 1, 1, 1};
    
    cout << sol.minSubArrayLen(7, nums1) << endl;  // Output: 2
    cout << sol.minSubArrayLen(4, nums2) << endl;  // Output: 1
    cout << sol.minSubArrayLen(11, nums3) << endl; // Output: 0
    return 0;
}
