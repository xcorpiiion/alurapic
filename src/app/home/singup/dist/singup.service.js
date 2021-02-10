"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SingupService = void 0;
var core_1 = require("@angular/core");
var API_URL = "http://localhost:3000";
var SingupService = /** @class */ (function () {
    function SingupService(http) {
        this.http = http;
    }
    SingupService.prototype.checkUserNameTaken = function (userName) {
        return this.http.get(API_URL + '/user/exists/' + userName);
    };
    SingupService.prototype.signup = function (newUser) {
        return this.http.post(API_URL + '/user/signup/', newUser);
    };
    SingupService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SingupService);
    return SingupService;
}());
exports.SingupService = SingupService;
