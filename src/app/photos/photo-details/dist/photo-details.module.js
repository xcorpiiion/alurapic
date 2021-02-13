"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoDetailsModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var photo_module_1 = require("../photo/photo.module");
var photo_details_component_1 = require("./photo-details.component");
var PhotoDetailsModule = /** @class */ (function () {
    function PhotoDetailsModule() {
    }
    PhotoDetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                photo_module_1.PhotoModule
            ],
            declarations: [
                photo_details_component_1.PhotoDetailsComponent
            ],
            exports: [
                photo_details_component_1.PhotoDetailsComponent
            ]
        })
    ], PhotoDetailsModule);
    return PhotoDetailsModule;
}());
exports.PhotoDetailsModule = PhotoDetailsModule;
