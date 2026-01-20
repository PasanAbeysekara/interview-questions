# Implement Queue using Two Stacks
# Time: O(1) amortized for push/pop, Space: O(n)

class MyQueue:
    def __init__(self):
        self.stack_in = []
        self.stack_out = []
    
    def push(self, x: int) -> None:
        self.stack_in.append(x)
    
    def pop(self) -> int:
        self._move()
        return self.stack_out.pop()
    
    def peek(self) -> int:
        self._move()
        return self.stack_out[-1]
    
    def empty(self) -> bool:
        return len(self.stack_in) == 0 and len(self.stack_out) == 0
    
    def _move(self) -> None:
        if not self.stack_out:
            while self.stack_in:
                self.stack_out.append(self.stack_in.pop())

# Test
if __name__ == "__main__":
    q = MyQueue()
    q.push(1)
    q.push(2)
    print(q.peek())  # 1
    print(q.pop())   # 1
    print(q.empty()) # False
