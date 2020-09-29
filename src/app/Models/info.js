"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoLocalDto = exports.InfoDto = exports.Info = exports.InfoConstant = void 0;
var date_helper_1 = require("../Helper/date.helper");
var InfoConstant;
(function (InfoConstant) {
    InfoConstant[InfoConstant["DELETE"] = -1] = "DELETE";
    InfoConstant[InfoConstant["NEW_FROM_LOCAL"] = 0] = "NEW_FROM_LOCAL";
    InfoConstant[InfoConstant["NEW_FROM_API"] = 1] = "NEW_FROM_API";
    InfoConstant[InfoConstant["UPDATE"] = 2] = "UPDATE";
})(InfoConstant = exports.InfoConstant || (exports.InfoConstant = {}));
var Info = /** @class */ (function () {
    function Info(obj) {
        if (obj === void 0) { obj = null; }
        if (obj) {
            this.id = obj.id;
            this.weight = obj.weight;
            this.height = obj.height;
            this.week = obj.week;
            this.month = obj.month;
            this.version = typeof obj.version === 'number' ? obj.version : InfoConstant.NEW_FROM_API;
            this.created = obj.created_at || obj.created;
            this.updated = obj.updated_at || obj.updated;
        }
        else {
            this.id = 0;
            this.month = 0;
            this.week = 0;
            this.weight = 0;
            this.height = 0;
        }
    }
    return Info;
}());
exports.Info = Info;
var InfoDto = /** @class */ (function () {
    function InfoDto(obj) {
        this.id = obj.id || null;
        this.weight = obj.weight;
        this.height = obj.height;
        this.week = obj.week;
        this.month = obj.month;
        this.created_at = obj.created ? date_helper_1.DateHelper.dateByFormat(new Date(obj.created), 'YYYY-MM-DD HH:mm:ss') : '';
        this.updated_at = obj.updated ? date_helper_1.DateHelper.dateByFormat(new Date(obj.updated), 'YYYY-MM-DD HH:mm:ss') : '';
    }
    return InfoDto;
}());
exports.InfoDto = InfoDto;
var InfoLocalDto = /** @class */ (function () {
    function InfoLocalDto(obj) {
        if (obj.id) {
            this.id = obj.id;
        }
        this.weight = obj.weight;
        this.height = obj.height;
        this.week = obj.week;
        this.month = obj.month;
        this.version = obj.version || InfoConstant.NEW_FROM_LOCAL;
        this.created = new Date();
        this.updated = new Date();
    }
    return InfoLocalDto;
}());
exports.InfoLocalDto = InfoLocalDto;
