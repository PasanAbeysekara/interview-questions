// Remove Duplicates from Sorted Array (in-place)
// Time: O(n), Space: O(1)

#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) {
            return 0;
        }
        
        int writeIdx = 1;
        
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] != nums[i - 1]) {
                nums[writeIdx] = nums[i];
                writeIdx++;
            }
        }
        
        return writeIdx;
    }
};

// Test
int main() {
    Solution sol;
    vector<int> nums = {1, 1, 2, 2, 3, 4, 4};
    int newLen = sol.removeDuplicates(nums);
    cout << "Length: " << newLen << ", Array: ";
    for (int i = 0; i < newLen; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    // Output: Length: 4, Array: 1 2 3 4
    return 0;
}
