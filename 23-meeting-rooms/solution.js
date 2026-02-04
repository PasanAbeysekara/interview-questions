// Meeting Rooms II - Minimum Number of Meeting Rooms
// Time: O(n log n), Space: O(n)

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
    
    peek() {
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
    
    bubbleUp(idx) {
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] <= this.heap[idx]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }
    
    bubbleDown(idx) {
        while (true) {
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;
            let smallest = idx;
            
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === idx) break;
            
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}

class Solution {
    minMeetingRooms(intervals) {
        if (!intervals || intervals.length === 0) return 0;
        
        intervals.sort((a, b) => a[0] - b[0]);
        const heap = new MinHeap();
        heap.push(intervals[0][1]);
        
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= heap.peek()) {
                heap.pop();
            }
            heap.push(intervals[i][1]);
        }
        
        return heap.size();
    }
}

// Test
if (require.main === module) {
    const sol = new Solution();
    console.log(sol.minMeetingRooms([[0, 30], [5, 10], [15, 20]]));  // 2
    console.log(sol.minMeetingRooms([[7, 10], [2, 4]]));  // 1
}

module.exports = Solution;
