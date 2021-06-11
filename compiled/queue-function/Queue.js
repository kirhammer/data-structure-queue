"use strict";
exports.__esModule = true;
exports.createQueue = void 0;
var createQueue = function () {
    var head, tail;
    var push = function (value) {
        var newNode = {
            value: value,
            previous: undefined
        };
        if (!head || !tail) {
            head = newNode;
            tail = newNode;
            return;
        }
        tail.previous = newNode;
        tail = newNode;
    };
    var pop = function () {
        var value = head.value;
        head = head.previous;
        return value;
    };
    var peek = function () {
        return head.value;
    };
    var print = function () {
        var flag = true;
        var string = '';
        var item = head;
        while (flag) {
            string += " | " + item.value;
            if (!item.previous)
                flag = false;
            item = item.previous;
        }
        console.log('Queue', string);
    };
    return {
        head: head,
        tail: tail,
        push: push,
        pop: pop,
        peek: peek,
        print: print
    };
};
exports.createQueue = createQueue;
