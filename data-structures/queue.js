class Queue {
  constructor() {
    this.entries = []
  }

  enqueue(data) {
    this.entries.push(data)
  }

  dequeue() {
    return this.entries.shift()
  }

  inspect() {
    console.log(`[${this.entries.join(', ')}]`)
  }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)

console.log(queue.inspect())
