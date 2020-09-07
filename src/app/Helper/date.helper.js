"use strict";
exports.__esModule = true;
exports.DateHelper = void 0;
var date_fns_1 = require("date-fns");
var DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    DateHelper.prototype.dateByFormat = function (date, formatDate) {
        return date_fns_1.format(date, formatDate);
    };
    return DateHelper;
}());
exports.DateHelper = DateHelper;
