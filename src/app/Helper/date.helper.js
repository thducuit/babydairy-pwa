"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHelper = void 0;
var moment = require("moment");
var DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    DateHelper.dateByFormat = function (date, formatDate) {
        return moment(date).format(formatDate);
    };
    return DateHelper;
}());
exports.DateHelper = DateHelper;
