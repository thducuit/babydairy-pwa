"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OnlineOfflineServiceService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var OnlineOfflineServiceService = /** @class */ (function () {
    function OnlineOfflineServiceService() {
        var _this = this;
        this.internalConnectionChanged = new rxjs_1.Subject();
        window.addEventListener('online', function () {
            _this.updateOnlineStatus();
        });
        window.addEventListener('offline', function () {
            _this.updateOnlineStatus();
        });
    }
    Object.defineProperty(OnlineOfflineServiceService.prototype, "connectionChanged", {
        get: function () {
            return this.internalConnectionChanged.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OnlineOfflineServiceService.prototype, "isOnline", {
        get: function () {
            return !!window.navigator.online;
        },
        enumerable: false,
        configurable: true
    });
    OnlineOfflineServiceService.prototype.updateOnlineStatus = function () {
        this.internalConnectionChanged.next(window.navigator.onLine);
    };
    OnlineOfflineServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], OnlineOfflineServiceService);
    return OnlineOfflineServiceService;
}());
exports.OnlineOfflineServiceService = OnlineOfflineServiceService;
