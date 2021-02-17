"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoadingService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var loading_type_enum_1 = require("./loading-type.enum");
var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loadingSubject = new rxjs_1.Subject();
    }
    LoadingService.prototype.getLoading = function () {
        return this.loadingSubject.asObservable().pipe(operators_1.startWith(loading_type_enum_1.LoadingType.STOPPED));
    };
    LoadingService.prototype.start = function () {
        this.loadingSubject.next(loading_type_enum_1.LoadingType.LOADING);
    };
    LoadingService.prototype.stop = function () {
        this.loadingSubject.next(loading_type_enum_1.LoadingType.STOPPED);
    };
    LoadingService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LoadingService);
    return LoadingService;
}());
exports.LoadingService = LoadingService;
