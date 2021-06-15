var SinglyNode = /** @class */ (function () {
    function SinglyNode(value) {
        this.previous = undefined;
        this.value = value;
    }
    return SinglyNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.size = 0;
    }
    /**
   * Inserts a new node at the head of list
   *
   * @param value New node value
   * @returns
   */
    SinglyLinkedList.prototype.pushToHead = function (value) {
        var newNode = new SinglyNode(value);
        newNode.previous = this.head;
        this.head = newNode;
        //If it is first node, it's also the tail
        if (this.size === 0)
            this.tail = newNode;
        this.size++;
    };
    /**
   * Inserts a new node at the tail of list
   *
   * @param value New node value
   * @returns
   */
    SinglyLinkedList.prototype.pushToTail = function (value) {
        var newNode = new SinglyNode(value);
        this.tail.previous = newNode;
        this.tail = newNode;
        this.size++;
    };
    /**
     * Inserts a new node in the list at the specified index
     *
     * @param value New node value
     * @param index New node position, must be between 0 and list.size
     * @returns
     */
    SinglyLinkedList.prototype.insert = function (value, index) {
        if (index === void 0) { index = 0; }
        //Index out of range
        if (index > this.size || index < 0)
            throw Error('Index out of range');
        //If empty list or insert at head
        if (this.size === 0 || index === 0)
            return this.pushToHead(value);
        //If insertion is at tail
        if (index === this.size)
            return this.pushToTail(value);
        //Index !== 0, search node and update
        var node = this.head;
        for (var i = 0; i < this.size; i++) {
            if (i === (index - 1))
                break;
            node = node.previous;
        }
        var newNode = new SinglyNode(value);
        newNode.previous = node.previous;
        node.previous = newNode;
        this.size++;
    };
    /**
     * Removes head from list
     */
    SinglyLinkedList.prototype.popHead = function () {
        this.head = this.head.previous;
        this.size--;
    };
    SinglyLinkedList.prototype.popTail = function () {
        if (this.size < 0)
            throw Error('Singly lined list is empty');
        if (this.size === 1) {
            this.head = undefined;
            this.tail = undefined;
            this.size--;
            return;
        }
        var node = this.head;
        var position = 0;
        //Stops 1 node before required index
        while (position < (this.size - 2)) {
            node = node.previous;
            position++;
        }
        node.previous = undefined;
        this.tail = node;
        this.size--;
    };
    SinglyLinkedList.prototype["delete"] = function (index) {
        //Index out of range
        if (index < 0 || index >= this.size)
            throw Error("Index out of range");
        //Pop head
        if (index === 0)
            return this.popHead();
        //Pop specific node or tail
        var node = this.head;
        var position = 0;
        //Stops 1 node before required index
        while (position < (index - 1)) {
            node = node.previous;
            position++;
        }
        node.previous = node.previous.previous;
        this.size--;
    };
    /**
     * Inserts a new node at the head of list
     *
     * @param value New node value
     * @returns
     */
    SinglyLinkedList.prototype.toString = function () {
        var string = '';
        var node = this.head;
        var flag = true;
        //Empty list
        if (this.size === 0)
            return string;
        while (flag) {
            string += " | " + node.value;
            if (!node.previous)
                flag = false;
            node = node.previous;
        }
        return string;
    };
    return SinglyLinkedList;
}());
/*--------  Usage example  --------*/
var list = new SinglyLinkedList();
list.pushToHead('First');
list.insert('Second', 1);
console.log('List', list.toString(), 'Size: ', list.size);
list.pushToTail("Fourht");
list.insert("Third", 2);
console.log('List', list.toString(), 'Size: ', list.size);
list.popHead();
console.log('List', list.toString(), 'Size: ', list.size);
list["delete"](list.size - 1);
console.log('List', list.toString(), 'Size: ', list.size);
list.popTail();
console.log('List', list.toString(), 'Size: ', list.size);
list.popTail();
console.log('List', list.toString(), 'Size: ', list.size);
