"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoadingComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(loadingService) {
        this.loadingService = loadingService;
    }
    LoadingComponent.prototype.ngOnInit = function () {
        this.loading$ = this.loadingService.getLoading().pipe(operators_1.map(function (loadingType) { return loadingType.valueOf(); }));
    };
    LoadingComponent = __decorate([
        core_1.Component({
            selector: 'app-loading',
            templateUrl: './loading.component.html',
            styleUrls: ['./loading.component.css']
        })
    ], LoadingComponent);
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;
