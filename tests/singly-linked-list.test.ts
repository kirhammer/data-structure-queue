
/*=============================================>>>>>
=  Imports  =
===============================================>>>>>*/

/*--------  To be tested  --------*/
import { SinglyLinkedList } from '../src/singly-linked-list/SinglyLinkedListClass'

/*= End of Imports =*/
/*=============================================<<<<<*/


/*=============================================>>>>>
=  Tests  =
===============================================>>>>>*/

describe("Singly Linked List tests", () => {
  let list: SinglyLinkedList
  
  beforeEach(() =>{
    list = new SinglyLinkedList()
  })

  describe("Insertion", () =>{
    test("Push to tail (1 item)", () => {
      list.pushToTail("First")
  
      expect(list.size).toEqual(1);
      expect(list.head.value).toBe("First");
      expect(list.head.previous).not.toBeDefined();
    })
  
    test("Push to tail (2 items)", () => {
      list.pushToTail("First")
      list.pushToTail("Second")
  
      expect(list.size).toEqual(2);
      expect(list.head.value).toBe("First");
      expect(list.tail.value).toBe("Second");
    })
  
    test("Push to head (1 item)", () => {
      list.pushToHead("First")
  
      expect(list.size).toEqual(1);
      expect(list.head.value).toBe("First");
      expect(list.head.previous).not.toBeDefined();
    })
  
    test("Push to head (2 items)", () => {
      list.pushToHead("First")
      list.pushToHead("Second")
  
      expect(list.size).toEqual(2);
      expect(list.head.value).toBe("Second");
      expect(list.tail.value).toBe("First");
    })
  
    test("Insert at head (1 item)", () => {
      list.insert("First", 0)
  
      expect(list.size).toEqual(1);
      expect(list.head.value).toBe("First");
      expect(list.tail.value).toBe("First");
    })

    test("Insert at head (1 item - no index)", () => {
      list.insert("First")
  
      expect(list.size).toEqual(1);
      expect(list.head.value).toBe("First");
      expect(list.tail.value).toBe("First");
    })
  
    test("Insert at head (2 items)", () => {
      list.insert("First", 0)
      list.insert("Second", 0)
  
      expect(list.size).toEqual(2);
      expect(list.head.value).toBe("Second");
      expect(list.tail.value).toBe("First");
    })
  
    test("Insert at tail (2 items)", () => {
      list.insert("First", 0)
      list.insert("Second", 1)
  
      expect(list.size).toEqual(2);
      expect(list.head.value).toBe("First");
      expect(list.tail.value).toBe("Second");
    })
  
    test("Insert (4 items)", () => {
      list.insert("First", 0)
      list.insert("Second", 0)
      list.insert("Third", 0)
      list.insert("Middle", 2)
  
      expect(list.size).toEqual(4);
      expect(list.head.value).toBe("Third");
      expect(list.tail.value).toBe("First");
    })
  
    test("Insert (out of range)", () => {
      expect(() => list.insert("First", 3)).toThrowError("Index out of range")
  
      expect(list.size).toEqual(0);
      expect(list.head).not.toBeDefined()
      expect(list.tail).not.toBeDefined()
    })
  })

  describe("Delete", () =>{
    beforeEach(() => {
      list.pushToTail("First")
      list.pushToTail("Second")
      list.pushToTail("Third")
      list.pushToTail("Fourth")
    })

    test("Pop head (size > 1)", () => {
      list.popHead()

      expect(list.size).toEqual(3)
      expect(list.head.value).toBe("Second")
      expect(list.tail.value).toBe("Fourth")
    })

    test("Pop head (size = 1)", () => {
      list.popHead()
      list.popHead()
      list.popHead()
      list.popHead()

      expect(list.size).toEqual(0)
      expect(list.head).not.toBeDefined()
      expect(list.tail).not.toBeDefined()
    })

    test("Pop head (out of range)", () => {
      list.popHead()
      list.popHead()
      list.popHead()
      list.popHead()


      expect(()=>list.popHead()).toThrowError("Singly linked list is empty")

      expect(list.size).toEqual(0)
      expect(list.head).not.toBeDefined()
      expect(list.tail).not.toBeDefined()
    })

    test("Pop tail (size > 1)", () =>{
      list.popTail()

      expect(list.size).toEqual(3)
      expect(list.head.value).toBe("First")
      expect(list.tail.value).toBe("Third")
    })

    test("Pop tail (size > 1)", () =>{
      list.popTail()
      list.popTail()
      list.popTail()
      list.popTail()

      expect(list.size).toEqual(0)
      expect(list.head).not.toBeDefined()
      expect(list.tail).not.toBeDefined()
    })

    test("Pop tail (out of range)", () => {
      list.popTail()
      list.popTail()
      list.popTail()
      list.popTail()

      expect(()=>list.popTail()).toThrowError("Singly linked list is empty")

      expect(list.size).toEqual(0)
      expect(list.head).not.toBeDefined()
      expect(list.tail).not.toBeDefined()
    })

    test("Pop tail (out of range)", () => {
      list.popTail()
      list.popTail()
      list.popTail()
      list.popTail()

      expect(()=>list.popTail()).toThrowError("Singly linked list is empty")

      expect(list.size).toEqual(0)
      expect(list.head).not.toBeDefined()
      expect(list.tail).not.toBeDefined()
    })

    test("Delete (size > 1)", () =>{
      list.delete(2)

      expect(list.size).toEqual(3)
      expect(list.head.value).toBe("First")
      expect(list.tail.value).toBe("Fourth")
    })

    test("Delete (size = 1)", () =>{
      list.delete(3)
      list.delete(2)
      list.delete(1)
      list.delete(0)

      expect(list.size).toEqual(0)
      expect(list.head).not.toBeDefined()
      expect(list.tail).not.toBeDefined()
    })

    test("Delete (out of range)", () =>{
      expect(() => list.delete(5)).toThrowError("Index out of range")

      expect(list.size).toEqual(4)
      expect(list.head.value).toBe("First")
      expect(list.tail.value).toBe("Fourth")
    })
  })

  describe("Seach", ()=>{
    beforeEach(() => {
      list.pushToTail("First")
      list.pushToTail("Second")
      list.pushToTail("Third")
      list.pushToTail("Fourth")
    })

    test("Search head", ()=>{
      expect(list.search(0).value).toBe("First")
    })

    test("Search tail", ()=>{
      expect(list.search(3).value).toBe("Fourth")
    })

    test("Search index", ()=>{
      expect(list.search(2).value).toBe("Third")
    })

    test("Search (out of range)", () =>{
      expect(() => list.search(6)).toThrowError("Index out of range")
    })
  })

  describe("To String", () => {
    test("To String (size > 1)",() =>{
      list.pushToTail("First")
      list.pushToTail("Second")
      list.pushToTail("Third")
      list.pushToTail("Fourth")

      expect(list.toString()).toBe(" | First | Second | Third | Fourth")
    })

    test("To String (size = 1)",() =>{
      list.pushToTail("First")

      expect(list.toString()).toBe(" | First")
    })

    test("To String (size = 0)",() =>{

      expect(list.toString()).toBe("")
    })
  })

})

/*= End of Tests =*/
/*=============================================<<<<<*/
