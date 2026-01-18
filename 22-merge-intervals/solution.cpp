// Merge Overlapping Intervals
// Time: O(n log n), Space: O(n)

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if (intervals.empty()) return {};
        
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> merged;
        merged.push_back(intervals[0]);
        
        for (int i = 1; i < intervals.size(); i++) {
            vector<int>& current = intervals[i];
            vector<int>& last = merged.back();
            
            if (current[0] <= last[1]) {
                last[1] = max(last[1], current[1]);
            } else {
                merged.push_back(current);
            }
        }
        
        return merged;
    }
};

// Test
int main() {
    Solution sol;
    vector<vector<int>> intervals1 = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
    vector<vector<int>> result1 = sol.merge(intervals1);
    
    for (auto& interval : result1) {
        cout << "[" << interval[0] << ", " << interval[1] << "] ";
    }
    cout << endl;  // [1, 6] [8, 10] [15, 18]
    
    vector<vector<int>> intervals2 = {{1, 4}, {4, 5}};
    vector<vector<int>> result2 = sol.merge(intervals2);
    
    for (auto& interval : result2) {
        cout << "[" << interval[0] << ", " << interval[1] << "] ";
    }
    cout << endl;  // [1, 5]
    
    return 0;
}
