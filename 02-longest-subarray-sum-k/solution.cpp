// Longest Subarray with Sum K
// Time: O(n), Space: O(n)

#include <vector>
#include <unordered_map>
#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
public:
    int longestSubarrayWithSumK(vector<int>& arr, int k) {
        unordered_map<int, int> prefixSumMap;
        int sum = 0;
        int maxLen = 0;
        
        for (int i = 0; i < arr.size(); i++) {
            sum += arr[i];
            
            if (sum == k) {
                maxLen = i + 1;
            }
            
            if (prefixSumMap.find(sum - k) != prefixSumMap.end()) {
                maxLen = max(maxLen, i - prefixSumMap[sum - k]);
            }
            
            if (prefixSumMap.find(sum) == prefixSumMap.end()) {
                prefixSumMap[sum] = i;
            }
        }
        
        return maxLen;
    }
};

// Test
int main() {
    Solution sol;
    vector<int> arr = {1, 2, 3, 1, 1, 1, 1};
    cout << sol.longestSubarrayWithSumK(arr, 3) << endl; // Output: 3
    return 0;
}
