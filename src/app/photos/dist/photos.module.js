"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotosModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var photo_details_module_1 = require("./photo-details/photo-details.module");
var photo_form_module_1 = require("./photo-form/photo-form.module");
var photo_list_module_1 = require("./photo-list/photo-list.module");
var photo_module_1 = require("./photo/photo.module");
var PhotosModule = /** @class */ (function () {
    function PhotosModule() {
    }
    PhotosModule = __decorate([
        core_1.NgModule({
            imports: [
                photo_module_1.PhotoModule,
                photo_form_module_1.PhotoFormModule,
                photo_list_module_1.PhotoListModule,
                common_1.CommonModule,
                photo_details_module_1.PhotoDetailsModule
            ]
        })
    ], PhotosModule);
    return PhotosModule;
}());
exports.PhotosModule = PhotosModule;
