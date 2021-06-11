
class Item {
  value: string
  previous: Item

  constructor(value: string){
    this.value = value
  }

  setPrevious(item: Item){
    this.previous = item
  }

}

export {
  Item
}