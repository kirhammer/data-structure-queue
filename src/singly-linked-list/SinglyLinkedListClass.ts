class SinglyNode {
  value: any
  previous: SinglyNode = undefined

  constructor(value: any){
    this.value =  value
  }
}

export class SinglyLinkedList {
  head: SinglyNode
  tail: SinglyNode
  size: number = 0

  constructor(){}

    /**
   * Inserts a new node at the head of list
   * 
   * @param value New node value
   * @returns 
   */
  pushToHead(value: any){
    const newNode = new SinglyNode(value)

    newNode.previous = this.head

    this.head = newNode

    //If it is first node, it's also the tail
    if(this.size === 0) this.tail = newNode

    this.size++
  }

    /**
   * Inserts a new node at the tail of list
   * 
   * @param value New node value
   * @returns 
   */
  pushToTail(value: any){
    //If empty list
    if(this.size === 0) return this.pushToHead(value)

    const newNode = new SinglyNode(value)

    this.tail.previous = newNode

    this.tail = newNode

    this.size++
  }

  /**
   * Inserts a new node in the list at the specified index
   * 
   * @param value New node value
   * @param index New node position, must be between 0 and list.size
   * @returns 
   */
  insert(value: any, index: number = 0){
    //Index out of range
    if(index > this.size || index < 0) throw Error('Index out of range')

    
    //If empty list or insert at head
    if(this.size === 0 || index === 0) return this.pushToHead(value)

    //If insertion is at tail
    if(index === this.size) return this.pushToTail(value)
    
    //Index !== 0, search node and update
    let node = this.head
    
    for (let i = 0; i < this.size; i++) {
      if(i === (index - 1)) break
      
      node = node.previous
    }
    
    const newNode = new SinglyNode(value)
    newNode.previous = node.previous
    node.previous = newNode
    this.size++
    
  }

  /**
   * Removes head from list
   */
  popHead(){
    if(this.size === 0) throw Error('Singly linked list is empty')

    this.head = this.head.previous

    if(this.size == 1) this.tail = undefined

    this.size--
  }

    /**
   * Removes tail from list
   */
  popTail(){
    if(this.size === 0) throw Error('Singly linked list is empty')

    if(this.size === 1){
      this.head = undefined
      this.tail = undefined
      this.size--
      return
    }

    let node = this.head
    let position = 0

    //Stops 1 node before required index
    while(position < (this.size - 2)){
      node = node.previous
      position++
    }
    
    node.previous = undefined
    this.tail = node
    
    this.size--
  }

  /**
   * Removes specified node from list
   * @param index Index of node to me removed
   */
  delete(index: number) {
    //Index out of range
    if(index < 0 || index >= this.size) throw Error("Index out of range")

    //Pop head
    if(index === 0) return this.popHead()

    //Pop specific node or tail
    let node = this.head
    let position = 0

    //Stops 1 node before required index
    while(position < (index - 1)){
      node = node.previous
      position++
    }
    
    node.previous = node.previous.previous
    this.size--
  }

  /**
   * 
   * @param value Value to be searched
   * @returns 
   */
  search(index: number){
    if(index < 0 || index >= this.size) throw Error("Index out of range")

    let node = this.head
    let position = 0

    while(position < index){
      node = node.previous
      position++
    }

    return node
  }

  /**
   * Inserts a new node at the head of list
   * 
   * @param value New node value
   * @returns 
   */
  toString(){
    let string: string = ''
    let node = this.head
    let flag = true

    //Empty list
    if(this.size === 0 ) return string

    while(flag){
      string+= ` | ${node.value}`

      if(!node.previous) flag = false

      node = node.previous
    }

    return string
  }


}