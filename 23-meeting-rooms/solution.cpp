// Meeting Rooms II - Minimum Number of Meeting Rooms
// Time: O(n log n), Space: O(n)

#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

class Solution {
public:
    int minMeetingRooms(vector<vector<int>>& intervals) {
        if (intervals.empty()) return 0;
        
        sort(intervals.begin(), intervals.end());
        priority_queue<int, vector<int>, greater<int>> heap;
        heap.push(intervals[0][1]);
        
        for (int i = 1; i < intervals.size(); i++) {
            if (intervals[i][0] >= heap.top()) {
                heap.pop();
            }
            heap.push(intervals[i][1]);
        }
        
        return heap.size();
    }
};

// Test
int main() {
    Solution sol;
    vector<vector<int>> intervals1 = {{0, 30}, {5, 10}, {15, 20}};
    cout << sol.minMeetingRooms(intervals1) << endl;  // 2
    
    vector<vector<int>> intervals2 = {{7, 10}, {2, 4}};
    cout << sol.minMeetingRooms(intervals2) << endl;  // 1
    
    return 0;
}
