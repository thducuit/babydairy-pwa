"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralService = void 0;
var core_1 = require("@angular/core");
var info_1 = require("../Models/info");
var GeneralService = /** @class */ (function () {
    function GeneralService() {
    }
    GeneralService.prototype.setInfos = function (infos) {
        this.infos = infos;
        return this;
    };
    GeneralService.prototype.getInfos = function () {
        return this.infos.filter(function (info) { return info.version !== info_1.InfoConstant.DELETE; });
    };
    GeneralService.prototype.getById = function (id) {
        return this.infos.find(function (item) {
            return item.id === id;
        });
    };
    GeneralService.prototype.getLabelByKey = function (key) {
        return this.infos.reduce(function (arr, item) {
            arr.push(item[key]);
            return arr;
        }, []);
    };
    GeneralService = __decorate([
        core_1.Injectable()
    ], GeneralService);
    return GeneralService;
}());
exports.GeneralService = GeneralService;
