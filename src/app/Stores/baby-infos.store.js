"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BabyInfosStore = void 0;
var core_1 = require("@angular/core");
var store_1 = require("./store");
var baby_infos_state_1 = require("../States/baby-infos.state");
var BabyInfosStore = /** @class */ (function (_super) {
    __extends(BabyInfosStore, _super);
    function BabyInfosStore() {
        return _super.call(this, new baby_infos_state_1.BabyInfosState()) || this;
    }
    BabyInfosStore.prototype.updateBabyInfos = function (infos) {
        this.setState(infos);
    };
    BabyInfosStore = __decorate([
        core_1.Injectable()
    ], BabyInfosStore);
    return BabyInfosStore;
}(store_1.Store));
exports.BabyInfosStore = BabyInfosStore;
