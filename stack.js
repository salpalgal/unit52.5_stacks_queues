/** Node: node for a stack. */

class Node {
  constructor(val, next =null) {
    this.val = val;
    this.next = next;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let current = this.first
    let newNode = new Node(val)
    if(this.first=== null){
      this.first = newNode
      this.last = newNode
      
    }
    if(this.size>1){
      this.first = newNode
      this.first.next = current
      
    }
    this.first = newNode
    this.size +=1
   

  }
 
  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size>0){
      this.size -=1
      return this.first.val
    }else{
      throw new Error("empty")
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if(this.size>0){
      return this.first.val
    }else{
      throw new Error("empty")
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size>0){
      return false
    }else{
      return true
    }
  }
}

module.exports = Stack;
