// Implement Queue using Two Stacks
// Time: O(1) amortized for push/pop, Space: O(n)

package main

import "fmt"

type MyQueue struct {
	stackIn  []int
	stackOut []int
}

func Constructor() MyQueue {
	return MyQueue{
		stackIn:  []int{},
		stackOut: []int{},
	}
}

func (q *MyQueue) Push(x int) {
	q.stackIn = append(q.stackIn, x)
}

func (q *MyQueue) Pop() int {
	q.move()
	val := q.stackOut[len(q.stackOut)-1]
	q.stackOut = q.stackOut[:len(q.stackOut)-1]
	return val
}

func (q *MyQueue) Peek() int {
	q.move()
	return q.stackOut[len(q.stackOut)-1]
}

func (q *MyQueue) Empty() bool {
	return len(q.stackIn) == 0 && len(q.stackOut) == 0
}

func (q *MyQueue) move() {
	if len(q.stackOut) == 0 {
		for len(q.stackIn) > 0 {
			q.stackOut = append(q.stackOut, q.stackIn[len(q.stackIn)-1])
			q.stackIn = q.stackIn[:len(q.stackIn)-1]
		}
	}
}

func main() {
	q := Constructor()
	q.Push(1)
	q.Push(2)
	fmt.Println(q.Peek())  // 1
	fmt.Println(q.Pop())   // 1
	fmt.Println(q.Empty()) // false
}
