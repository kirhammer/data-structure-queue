export abstract class ListNode {
  value: any
  next: ListNode
  previous: ListNode

  constructor(value: any, next: ListNode = undefined, previous: ListNode = undefined){
    this.value = value
    this.next = next
    this.previous = previous
  }
}