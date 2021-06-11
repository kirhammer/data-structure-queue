import { createQueue } from './Queue'

const queue = createQueue()

queue.push('First Item')
queue.push('Second Item')
queue.push('Third Item')

queue.print()

console.log('Popped: ', queue.pop())

queue.print()

queue.push('Fourht Item')

queue.print()

console.log('Queue head:', queue.peek())