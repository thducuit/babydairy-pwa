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
exports.__esModule = true;
exports.ProducerService = void 0;
var base_service_1 = require("./base.service");
var core_1 = require("@angular/core");
var consumer_1 = require("../Models/consumer");
var operators_1 = require("rxjs/operators");
var ProducerService = /** @class */ (function (_super) {
    __extends(ProducerService, _super);
    function ProducerService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.url = '/consumers';
        return _this;
    }
    ProducerService.prototype.setProducers = function (consumers) {
        this.consumers = consumers;
    };
    ProducerService.prototype.getProducerByDate = function (date) {
        if (date === void 0) { date = null; }
        date = date || new Date();
        return this.consumers.filter(function (consumer) {
            return consumer.isDateEqual(date);
        });
    };
    ProducerService.prototype.addProducer = function (newProducer) {
        this.consumers.push(newProducer);
    };
    ProducerService.prototype.updateProducer = function (updatedProducer) {
        this.consumers = this.consumers.map(function (consumer) {
            if (consumer.id === updatedProducer.id) {
                consumer = updatedProducer;
            }
            return consumer;
        });
    };
    ProducerService.prototype.deleteProducer = function (selectedId) {
        this.consumers = this.consumers.filter(function (con) {
            if (con.id !== selectedId) {
                return con;
            }
        });
    };
    ProducerService.prototype.fetch = function () {
        return this.http.get(this.url)
            .pipe(operators_1.map(function (res) {
            return res.map(function (item) { return new consumer_1.Producer(item); });
        }));
    };
    ProducerService.prototype.create = function (data) {
        return this.http.post(this.url, new consumer_1.ProducerDto(data))
            .pipe(operators_1.map(function (res) { return new consumer_1.Producer(res); }));
    };
    ProducerService.prototype.update = function (data) {
        return this.http.put(this.url.concat("/" + data.id), new consumer_1.ProducerDto(data))
            .pipe(operators_1.map(function (res) { return new consumer_1.Producer(res); }));
    };
    ProducerService.prototype["delete"] = function (id) {
        return this.http["delete"](this.url.concat("/" + id));
    };
    ProducerService = __decorate([
        core_1.Injectable()
    ], ProducerService);
    return ProducerService;
}(base_service_1.BaseService));
exports.ProducerService = ProducerService;
