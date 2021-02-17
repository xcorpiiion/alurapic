"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoadingModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var loading_component_1 = require("./loading.component");
var http_1 = require("@angular/common/http");
var loading_interceptor_1 = require("./loading.interceptor");
var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                loading_component_1.LoadingComponent
            ],
            exports: [
                loading_component_1.LoadingComponent
            ],
            providers: [{
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: loading_interceptor_1.LoadingInterceptor,
                    multi: true
                }]
        })
    ], LoadingModule);
    return LoadingModule;
}());
exports.LoadingModule = LoadingModule;
