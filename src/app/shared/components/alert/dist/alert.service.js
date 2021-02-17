"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlertService = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rxjs_1 = require("rxjs");
var alert_1 = require("./alert");
var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.alertSubject = new rxjs_1.Subject();
        this.keepAfterRouteChange = false;
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (_this.keepAfterRouteChange) {
                    _this.keepAfterRouteChange = false;
                }
                else {
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.alert = function (alertType, message, keepAfterRouteChange) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.alertSubject.next(new alert_1.Alert(alertType, message));
    };
    AlertService.prototype.sucess = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(alert_1.AlertType.SUCESS, message, keepAfterRouteChange);
    };
    AlertService.prototype.warnning = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(alert_1.AlertType.WARNNING, message, keepAfterRouteChange);
    };
    AlertService.prototype.danger = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(alert_1.AlertType.DANGER, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(alert_1.AlertType.INFO, message, keepAfterRouteChange);
    };
    AlertService.prototype.getAlert = function () {
        return this.alertSubject.asObservable();
    };
    AlertService.prototype.clear = function () {
        this.alertSubject.next(null);
    };
    AlertService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AlertService);
    return AlertService;
}());
exports.AlertService = AlertService;
