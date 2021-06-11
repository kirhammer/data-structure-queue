"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(value) {
        this.value = value;
    }
    Item.prototype.setPrevious = function (item) {
        this.previous = item;
    };
    return Item;
}());
exports.Item = Item;
