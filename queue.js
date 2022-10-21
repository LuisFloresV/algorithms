class Node {
  constructor(value, next = undefined) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.tail = undefined;
    this.head = undefined;
    this.length = 0;
  }

  enqueue(value) {
    if (!this.tail) {
      this.head = this.tail = new Node(value);
      return;
    }

    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;

    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }

    const head = this.head;
    this.head = head.next;

    this.length--;
  }

  peek() {
    return this.head?.value;
  }
}
