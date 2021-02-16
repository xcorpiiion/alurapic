"use strict";
exports.__esModule = true;
exports.AlertType = exports.Alert = void 0;
var Alert = /** @class */ (function () {
    function Alert(alertType, message) {
        this.alertType = alertType;
        this.message = message;
    }
    return Alert;
}());
exports.Alert = Alert;
var AlertType;
(function (AlertType) {
    AlertType[AlertType["SUCESS"] = 0] = "SUCESS";
    AlertType[AlertType["WARNNING"] = 1] = "WARNNING";
    AlertType[AlertType["INFO"] = 2] = "INFO";
    AlertType[AlertType["DANGER"] = 3] = "DANGER";
})(AlertType = exports.AlertType || (exports.AlertType = {}));
