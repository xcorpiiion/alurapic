"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
var jtw_decode = require("jwt-decode");
var rxjs_1 = require("rxjs");
var UserService = /** @class */ (function () {
    function UserService(tokenService) {
        this.tokenService = tokenService;
        this.userSubject = new rxjs_1.BehaviorSubject(null);
        if (this.tokenService.hasToken()) {
            this.decodeAndNotify();
        }
    }
    UserService.prototype.setToken = function (token) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    };
    UserService.prototype.getUser = function () {
        return this.userSubject.asObservable();
    };
    UserService.prototype.decodeAndNotify = function () {
        var token = this.tokenService.getToken();
        var user = jtw_decode(token);
        this.userSubject.next(user);
    };
    UserService.prototype.logout = function () {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
