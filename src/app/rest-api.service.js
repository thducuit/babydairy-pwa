"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestApiService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../environments/environment");
var http_1 = require("@angular/common/http");
var RestApiService = /** @class */ (function () {
    function RestApiService(http) {
        this.http = http;
        this.apiUrl = environment_1.environment.api;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    RestApiService.prototype.getEndpoint = function (url) {
        return "" + this.apiUrl + url;
    };
    RestApiService.prototype.get = function (url) {
        return this.http.get(this.getEndpoint(url));
    };
    RestApiService.prototype.post = function (url, params) {
        return this.http.post(this.getEndpoint(url), params, this.httpOptions);
    };
    RestApiService.prototype.put = function (url, params) {
        return this.http.put(this.getEndpoint(url), params, this.httpOptions);
    };
    RestApiService.prototype["delete"] = function (url) {
        return this.http["delete"](this.getEndpoint(url));
    };
    RestApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RestApiService);
    return RestApiService;
}());
exports.RestApiService = RestApiService;
