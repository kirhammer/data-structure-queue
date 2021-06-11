type Item = {
  value: string,
  previous: Item
}

const createQueue = () => {
  let head: Item , tail: Item

  const push = (value: string) => {
    const newNode: Item = {
      value,
      previous: undefined
    }
  
    if(!head || !tail){
      head = newNode
      tail = newNode
      return
    }
  
    tail.previous = newNode
    tail= newNode
  }

  const pop = () => {
    const value = head.value

    head = head.previous

    return value
  }

  const peek = () => {
    return head.value
  }

  const print = () => {
    let flag = true
    let string = ''
    let item = head
  
    while(flag){
      string+= ` | ${item.value}`
  
      if(!item.previous) flag = false
  
      item = item.previous
  
    }
  
    console.log('Queue', string)
  }

  return {
    head,
    tail,
    push,
    pop,
    peek,
    print
  }
}

export {
  createQueue
}
