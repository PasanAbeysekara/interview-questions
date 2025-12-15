// Longest Consecutive Sequence
// Time: O(n), Space: O(n)

#include <vector>
#include <unordered_set>
#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> numSet(nums.begin(), nums.end());
        int maxLen = 0;
        
        for (int num : numSet) {
            // Only start counting from the beginning of a sequence
            if (numSet.find(num - 1) == numSet.end()) {
                int currentNum = num;
                int currentLen = 1;
                
                while (numSet.find(currentNum + 1) != numSet.end()) {
                    currentNum++;
                    currentLen++;
                }
                
                maxLen = max(maxLen, currentLen);
            }
        }
        
        return maxLen;
    }
};

// Test
int main() {
    Solution sol;
    vector<int> nums1 = {100, 4, 200, 1, 3, 2};
    vector<int> nums2 = {0, 3, 7, 2, 5, 8, 4, 6, 0, 1};
    
    cout << sol.longestConsecutive(nums1) << endl; // Output: 4
    cout << sol.longestConsecutive(nums2) << endl; // Output: 9
    return 0;
}
