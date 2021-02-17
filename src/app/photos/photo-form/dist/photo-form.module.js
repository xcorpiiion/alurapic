"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoFormModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var immediate_click_module_1 = require("src/app/shared/components/card/card/directives/immediate-click/immediate-click.module");
var validation_message_module_1 = require("src/app/shared/components/validation-message/validation-message.module");
var photo_module_1 = require("../photo/photo.module");
var photo_form_component_1 = require("./photo-form.component");
var PhotoFormModule = /** @class */ (function () {
    function PhotoFormModule() {
    }
    PhotoFormModule = __decorate([
        core_1.NgModule({
            declarations: [
                photo_form_component_1.PhotoFormComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                validation_message_module_1.ValidationMessageModule,
                photo_module_1.PhotoModule,
                immediate_click_module_1.ImmediateClickModule,
                router_1.RouterModule
            ]
        })
    ], PhotoFormModule);
    return PhotoFormModule;
}());
exports.PhotoFormModule = PhotoFormModule;
