/** Node: node for a queue. */

class Node {
  constructor(val,next=null) {
    this.val = val;
    this.next = next;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let current = this.last
    let newNode = new Node(val)
    if(this.first=== null){
      this.first = newNode
      this.last = newNode
      
    }
    if(this.size>1){
      current.next = newNode
      
    }
    this.last = newNode
    this.size +=1
   

    

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let head = this.first
    if(this.head===null){
      throw new Error("empty")
    }else if(this.size===1){
      this.head = null
      this.size -=1
      return head.val   
    }else{
      this.size -= 1
      return head.val
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.first !==null){
      return this.first.val
    }else{
      return null
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size>0){
      return false
    }else{
      return true
    }
  }
}

module.exports = Queue;
