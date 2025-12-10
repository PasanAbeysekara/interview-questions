// Two Sum - Return indices of two numbers that add up to target
// Time: O(n), Space: O(n)

#include <vector>
#include <unordered_map>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> seen;
        
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (seen.find(complement) != seen.end()) {
                return {seen[complement], i};
            }
            seen[nums[i]] = i;
        }
        
        throw invalid_argument("No solution found");
    }
};

// Test
int main() {
    Solution sol;
    vector<int> nums = {2, 7, 11, 15};
    vector<int> result = sol.twoSum(nums, 9);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl; // Output: [0, 1]
    return 0;
}
