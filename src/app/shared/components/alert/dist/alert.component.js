"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AlertComponent = void 0;
var core_1 = require("@angular/core");
var alert_1 = require("./alert");
var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        var _this = this;
        this.alertService = alertService;
        this.timeout = 3000;
        this.alerts = [];
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                _this.alerts = [];
                return;
            }
            _this.alerts.push(alert);
            setTimeout(function () { return _this.removeAlert(alert); }, _this.timeout);
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.removeAlert = function (alertToRemove) {
        this.alerts = this.alerts.filter(function (alert) { return alert != alertToRemove; });
    };
    AlertComponent.prototype.getAlertClass = function (alert) {
        if (!alert) {
            return '';
        }
        switch (alert.alertType) {
            case alert_1.AlertType.DANGER:
                return 'alert alert-danger';
            case alert_1.AlertType.INFO:
                return 'alert alert-info';
            case alert_1.AlertType.SUCESS:
                return 'alert alert-success';
            case alert_1.AlertType.WARNNING:
                return 'alert alert-warning';
        }
    };
    __decorate([
        core_1.Input()
    ], AlertComponent.prototype, "timeout");
    AlertComponent = __decorate([
        core_1.Component({
            selector: 'app-alert',
            templateUrl: './alert.component.html',
            styleUrls: ['./alert.component.css']
        })
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
