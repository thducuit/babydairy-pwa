"use strict";
exports.__esModule = true;
exports.ProducerDto = exports.Producer = void 0;
var moment = require("moment");
var Producer = /** @class */ (function () {
    function Producer(obj) {
        if (obj === void 0) { obj = null; }
        if (obj) {
            this.id = obj.id;
            this.capacity = obj.capacity;
            this.no = obj.no;
            this.unit = obj.unit || 'ml';
            this.created = obj.created_at;
            this.updated = obj.updated_at;
            this.time = this.created ? moment(this.created).format('HH:mm') : '';
            this.date = this.created ? moment(this.created).format('MM-DD-YYYY') : '';
        }
        else {
            this.id = 0;
            this.capacity = 0;
            this.no = 1;
            this.unit = 'ml';
        }
    }
    Producer.prototype.isDateEqual = function (date) {
        return this.date === moment(date).format('MM-DD-YYYY');
    };
    return Producer;
}());
exports.Producer = Producer;
var ProducerDto = /** @class */ (function () {
    function ProducerDto(obj) {
        this.id = obj.id || null;
        this.no = obj.no || 1;
        this.capacity = obj.capacity;
        this.unit = obj.unit || 'ml';
    }
    return ProducerDto;
}());
exports.ProducerDto = ProducerDto;
