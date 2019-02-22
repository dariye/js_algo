class Stack {
  constructor() {
    this.entries = []
  }

  push(data) {
    this.entries.push(data)
  }

  pop(data) {
    return this.entries.pop()
  }

  inspect() {
    console.log(`[${this.entries.join(', ')}]`)
  }
}

// test cases

const stack = new Stack()

stack.push(1)
stack.push(2)

console.log(stack.inspect())

