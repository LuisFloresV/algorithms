class Node {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    const head = this.head;

    this.head = node;
    this.head.prev = head;

    this.length++;
  }

  pop() {

    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head;
    }



    const head = this.head;
    this.head = head.prev;

    this.length--;

    return head;
  }

  peek() {
    return this.head?.value;
  }
}