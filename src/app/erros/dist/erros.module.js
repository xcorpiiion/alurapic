"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ErrosModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var erros_component_1 = require("./erros.component");
var global_error_handler_1 = require("./global-error-handler/global-error-handler");
var ErrosModule = /** @class */ (function () {
    function ErrosModule() {
    }
    ErrosModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                erros_component_1.ErrosComponent
            ],
            providers: [{
                    provide: core_1.ErrorHandler,
                    useClass: global_error_handler_1.GlobalErrorHandler
                }]
        })
    ], ErrosModule);
    return ErrosModule;
}());
exports.ErrosModule = ErrosModule;
