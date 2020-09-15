"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DbLocalService = void 0;
var core_1 = require("@angular/core");
var dexie_1 = require("dexie");
var DbLocalService = /** @class */ (function () {
    function DbLocalService() {
        this.version = 1;
        this.dbName = 'babydairy_local_db';
        this.createDatabase();
    }
    DbLocalService.prototype.createDatabase = function () {
        this.db = new dexie_1["default"](this.dbName);
        this.db.version(this.version).stores({
            consumers: 'id, capacity, no, unit, isEmpty, version',
            producers: 'id, capacity, no, unit, version',
        });
    };
    DbLocalService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DbLocalService);
    return DbLocalService;
}());
exports.DbLocalService = DbLocalService;
