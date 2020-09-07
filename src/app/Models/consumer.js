"use strict";
exports.__esModule = true;
exports.ConsumerDto = exports.Consumer = void 0;
var moment = require("moment");
var Consumer = /** @class */ (function () {
    function Consumer(obj) {
        if (obj === void 0) { obj = null; }
        if (obj) {
            this.id = obj.id;
            this.capacity = obj.capacity;
            this.no = obj.no;
            this.unit = obj.unit || 'ml';
            this.isEmpty = obj.is_empty === 1;
            this.created = obj.created_at;
            this.updated = obj.updated_at;
            this.time = this.created ? moment(this.created).format('HH:mm') : '';
            this.date = this.created ? moment(this.created).format('MM-DD-YYYY') : '';
        }
        else {
            this.id = 0;
            this.capacity = 0;
            this.no = 1;
            this.isEmpty = true;
            this.unit = 'ml';
        }
    }
    Consumer.prototype.isDateEqual = function (date) {
        return this.date === moment(date).format('MM-DD-YYYY');
    };
    return Consumer;
}());
exports.Consumer = Consumer;
var ConsumerDto = /** @class */ (function () {
    function ConsumerDto(obj) {
        this.id = obj.id || null;
        this.no = obj.no || 1;
        this.capacity = obj.capacity;
        this.is_empty = obj.isEmpty ? 1 : 0;
        this.unit = obj.unit || 'ml';
    }
    return ConsumerDto;
}());
exports.ConsumerDto = ConsumerDto;
