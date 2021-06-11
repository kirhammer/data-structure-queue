import { 
  Item
} from './Node'

/**
 * @class Queue
 * @property {Item} - The first item in queue
 * @property {Item} - Last item in queue
 */
class Queue {
  head: Item
  tail: Item

  constructor(){

  }

  /**
   * Pushes item to the front of the queue
   * @param {string} value 
   * @returns 
   */
  public push(value: string) {
    const newItem = new Item(value)
        
    if(!this.head || !this.tail){
      this.head = newItem
      this.tail = newItem
      return
    }

    this.tail.setPrevious(newItem)
    this.tail = newItem
  }

  /**
   * Removes item in the front of the queue
   * @returns Removed Item value
   */
  public pop(): string{
    const value: string = this.head.value
    this.head = this.head.previous
    
    return value
  }

  /**
   * Retrieves value from head (front of the queue)
   * @returns Head value
   */
  public peek(){
    return this.head.value
  }

  /**
   * Prints Items in order from first to last
   */
  public print(){
    let string: string = ''
    let flag: boolean = true
    let item: Item = this.head


    while(flag){
      string+= ` | ${item.value}`

      if(!item.previous) flag = false
      
      item = item.previous

    }

    console.log('Queue: ', string)
  }
}

export {
  Queue
}