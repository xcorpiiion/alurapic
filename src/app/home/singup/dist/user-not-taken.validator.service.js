"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserNotTakenValidatorService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var UserNotTakenValidatorService = /** @class */ (function () {
    function UserNotTakenValidatorService(singupService) {
        this.singupService = singupService;
    }
    UserNotTakenValidatorService.prototype.checkUserNameTaken = function () {
        var _this = this;
        return function (control) {
            return control.valueChanges.pipe(operators_1.debounceTime(300)).pipe(operators_1.switchMap(function (userName) {
                return _this.singupService.checkUserNameTaken(userName);
            })).pipe(operators_1.map(function (isTaken) { return isTaken ? { userNameTaken: true } : null; })).pipe(operators_1.first());
        };
    };
    UserNotTakenValidatorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserNotTakenValidatorService);
    return UserNotTakenValidatorService;
}());
exports.UserNotTakenValidatorService = UserNotTakenValidatorService;
