import { Queue } from './Queue'

const queue = new Queue()

queue.push('First job')
queue.push('Second job')
queue.push('Third job')
queue.push('Fourth job')
queue.push('Fifth job')

queue.print()

queue.pop()

queue.print()

console.log('Current Item', queue.peek())

queue.push('Sixth job')

queue.print()
