# Data Structures

This project implements a few data structures as Typescript classes. Some of the structures are: queue, singly linked list...

## Compile

**src** folder can be compiled to Javascript, through **@babel/preset-typescript**, to **lib** folder through the following command:

 ```bash
 node run compile
 ```

## Test

Unit tests are run through the following command:

```bash
node test
```

## Classes

### Singly Linked List
This structure allows to move between nodes in the foward direction only. An instance of this class contains 3 parameters: 

- **size**: Amount of linked nodes in list
- **head**: A reference to the first node of the list
- **tail**: A reference to the last node of the list

Also, there are several operations that can be applied to the list, such as:

```javascript
const list = new SinglyLinkedList()

//Pushes item at the begining of the list
list.pushToHead("First item")

//Pushes item at the end of the list
list.pushToTail("Last item")

//Pushes item at the specified index
list.insert("Second item", 1)

//Deletes item at the begnining of the list
list.popHead()

//Deletes item at the end of the list
list.popTail()

//Deletes item at the specified index
list.delete(1)

//Returns item at the specified index
const node: SinglyNode = list.search(1)

//Returns a string representation of the list
const string: string = list.toString()
```

### Doubly Linked List
This structure allows to move between nodes in the foward and backward direction. An instance of this class contains 3 parameters: 

- **size**: Amount of linked nodes in list
- **head**: A reference to the first node of the list
- **tail**: A reference to the last node of the list

Moreover, this list is build linking instances of **DoublyNode**, which has the following parameters

- **value**     : Valor del nodo. Puede ser de cualquier tipo
- **next**      : Referencia al siguiente nodo en la lista
- **previous**  : Referncia al nodo anterior en la lista

Also, there are several operations that can be applied to the list, such as:

```javascript
const list = new SinglyLinkedList()

//Pushes item at the begining of the list
list.pushToHead("First item")

//Pushes item at the end of the list
list.pushToTail("Last item")

//Pushes item at the specified index
list.insert("Second item", 1)

//Deletes item at the begnining of the list
const poppedNode = list.popHead()

//Deletes item at the end of the list
const poppedNode = list.popTail()

//Deletes item at the specified index
const poppedNode = list.delete(1)

//Returns item at the specified index
const node: SinglyNode = list.search(1)

//Returns a string representation of the list
const string: string = list.toString()
```

