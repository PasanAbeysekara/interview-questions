// Implement Queue using Two Stacks
// Time: O(1) amortized for push/pop, Space: O(n)

class MyQueue {
    private stackIn: number[];
    private stackOut: number[];
    
    constructor() {
        this.stackIn = [];
        this.stackOut = [];
    }
    
    push(x: number): void {
        this.stackIn.push(x);
    }
    
    pop(): number {
        this._move();
        return this.stackOut.pop()!;
    }
    
    peek(): number {
        this._move();
        return this.stackOut[this.stackOut.length - 1];
    }
    
    empty(): boolean {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }
    
    private _move(): void {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop()!);
            }
        }
    }
}

// Test
if (require.main === module) {
    const q = new MyQueue();
    q.push(1);
    q.push(2);
    console.log(q.peek());  // 1
    console.log(q.pop());   // 1
    console.log(q.empty()); // false
}

export default MyQueue;
