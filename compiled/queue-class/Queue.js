"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Node_1 = require("./Node");
/**
 * @class Queue
 * @property {Item} - The first item in queue
 * @property {Item} - Last item in queue
 */
var Queue = /** @class */ (function () {
    function Queue() {
    }
    /**
     * Pushes item to the front of the queue
     * @param {string} value
     * @returns
     */
    Queue.prototype.push = function (value) {
        var newItem = new Node_1.Item(value);
        if (!this.head || !this.tail) {
            this.head = newItem;
            this.tail = newItem;
            return;
        }
        this.tail.setPrevious(newItem);
        this.tail = newItem;
    };
    /**
     * Removes item in the front of the queue
     * @returns Removed Item value
     */
    Queue.prototype.pop = function () {
        var value = this.head.value;
        this.head = this.head.previous;
        return value;
    };
    /**
     * Retrieves value from head (front of the queue)
     * @returns Head value
     */
    Queue.prototype.peek = function () {
        return this.head.value;
    };
    /**
     * Prints Items in order from first to last
     */
    Queue.prototype.print = function () {
        var string = '';
        var flag = true;
        var item = this.head;
        while (flag) {
            string += " | " + item.value;
            if (!item.previous)
                flag = false;
            item = item.previous;
        }
        console.log('Queue: ', string);
    };
    return Queue;
}());
exports.Queue = Queue;
