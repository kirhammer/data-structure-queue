import  { ListNode } from './AbstractNode'

export abstract class LinkedList {

  size: number = 0
  head: ListNode
  tail: ListNode

  constructor(){ }

  
  /*--------  Insertion  --------*/

  abstract pushToHead( value: any ): void

  abstract pushToTail( value: any ): void

  abstract insert( value: any, index: number ): void
  
  /*--------  Delete  --------*/
  
  abstract popHead(): ListNode

  abstract popTail(): ListNode

  abstract delete( index: number ): ListNode

  /*--------  Search  --------*/
  
  abstract search( index: number ): ListNode

  
  /*--------  Stringify  --------*/
  
  abstract toString(): string
  
}