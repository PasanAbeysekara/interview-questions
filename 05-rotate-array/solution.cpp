// Rotate Array to the right by k steps
// Time: O(n), Space: O(1) using reversal algorithm

#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        k = k % n; // Handle k > n
        
        // Reverse entire array
        reverse(nums.begin(), nums.end());
        // Reverse first k elements
        reverse(nums.begin(), nums.begin() + k);
        // Reverse remaining elements
        reverse(nums.begin() + k, nums.end());
    }
};

// Test
int main() {
    Solution sol;
    vector<int> nums = {1, 2, 3, 4, 5, 6, 7};
    sol.rotate(nums, 3);
    for (int num : nums) {
        cout << num << " "; // Output: 5 6 7 1 2 3 4
    }
    cout << endl;
    return 0;
}
