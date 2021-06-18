
import { LinkedList } from '../AbstractList'
import { ListNode } from '../AbstractNode'

class DoublyNode extends ListNode {
  constructor(value: any, next: DoublyNode = undefined, previous: DoublyNode = undefined) {
    super(value, next, previous)
  }
}

export class DoublyLinkedList extends LinkedList {

  constructor() {
    super()
  }

  /*--------  Insertion  --------*/

  pushToHead(value: any): void {
    //Creates new node linked to head on next
    const newNode = new DoublyNode(value, this.head, undefined)

    //Sets new node as previous in current head
    if(this.head) this.head.previous = newNode

    //Updates head and size
    this.head = newNode

    //Updates tail if is first node
    if(this.size === 0) this.tail = newNode

    this.size++
  }

  pushToTail(value: any): void {
    const newNode = new DoublyNode(value, undefined, this.tail)

    //Updates current tail if exists
    if(this.tail) this.tail.next = newNode

    //Sets new tail
    this.tail = newNode

    //Sets head if first node
    if(this.size === 0) this.head = newNode

    this.size++
  }

  insert(value: any, index: number = 0): void {
    if(index  < 0 || index > this.size) throw Error("Index out of range")

    if(index === 0) return this.pushToHead(value)

    if(index === this.size) return this.pushToTail(value)

    const newNode = new DoublyNode(value)

    let currentNode = this.head

    for (let i = 0; i < this.size; i++) {
      if(i === index) break
      currentNode = currentNode.next
    }
    //link to previous node
    currentNode.previous.next = newNode

    //reference previous node
    newNode.previous = currentNode.previous

    //reference next node
    newNode.next = currentNode

    //link to next node
    currentNode.previous = newNode
    this.size++
  }


  /*--------  Delete  --------*/

  popHead(): DoublyNode { 
    if(this.size == 0) throw Error("Doubly linked list is empty")
    
    const node = this.head

    //Sets head to next node
    this.head = node.next

    //Removes previous from new head if it exists
    if(this.head) this.head.previous = undefined

    //If it was last node in list, remove tail
    if(this.size === 1) this.tail = undefined

    this.size--

    return node
  }

  popTail(): DoublyNode {
    if(this.size === 0) throw Error("Doubly linked list is empty")

    const node = this.tail

    this.tail = node.previous

    if(this.tail) this.tail.next = undefined

    if(this.size === 1) this.head = undefined

    this.size--

    return node
  }

  delete(index: number): DoublyNode { 
    if(index < 0 || index >= this.size) throw Error("Index out of range")

    if(index === 0) return this.popHead()

    if(index === this.size - 1) return this.popTail()

    let node = this.head

    for (let i = 0; i < this.size; i++) {
      if(i === index) break
      node = node.next      
    }

    node.previous.next = node.next
    if(node.next) node.next.previous = node.previous

    this.size--

    return node
  }


  /*--------  Search  --------*/

  search(index: number): DoublyNode {
    if(index < 0 || index > this.size) throw Error("Index out of range")

    let node = this.head

    for (let i = 0; i < this.size; i++) {
      if(i === index) break
      node = node.next      
    }

    return node
  }


  /*--------  To String  --------*/

  toString(): string {
    let string: string = ''
    let node = this.head
    let flag = true

    //Empty list
    if(this.size === 0 ) return string

    while(flag){
      string+= ` | ${node.value}`

      if(!node.next) flag = false

      node = node.next
    }

    return string
  }

}