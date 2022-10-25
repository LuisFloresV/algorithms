class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.tail = undefined;
    this.head = undefined;
  }

  append(value) {
    const node = new Node(value);
    this.length++;

    if (!this.head) {
      return (this.head = this.tail = node);
    }

    this.tail.next = node;
    this.tail = node;
  }

  prepend(value) {
    const node = new Node(value);

    this.length++

    if (!this.head) {
      return (this.head = this.tail = node);
    }

    node.next = this.head;
    this.head = node;
  }

  get(idx) {
    if (!this.head) {
      return 'Theres no elements in the list';
    }

    if (idx >= this.length) {
      return 'Oh no 💣';
    }

    let node = this.head;

    for (let x = 0; x < idx && x < this.length; x++) {
      node = node.next;
    }

    return node;
  }

  removeAt(idx) {
    if (!this.head) {
      return 'Oh no 💣';
    }

    if (idx >= this.length) {
      return 'Oh no 💣';
    }

    let node = this.head;
    let prev;

    for (let x = 0; x < idx && x < this.length; x++) {
      prev = node;
      node = node.next;
    }

    prev.next = node.next;

    this.length--;
  }
}