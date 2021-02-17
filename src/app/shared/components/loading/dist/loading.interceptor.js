"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoadingInterceptor = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor(loadingService) {
        this.loadingService = loadingService;
    }
    LoadingInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(operators_1.tap(function (event) {
            if (event instanceof http_1.HttpResponse) {
                _this.loadingService.stop();
            }
            else {
                _this.loadingService.start();
            }
        }));
    };
    LoadingInterceptor = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], LoadingInterceptor);
    return LoadingInterceptor;
}());
exports.LoadingInterceptor = LoadingInterceptor;
