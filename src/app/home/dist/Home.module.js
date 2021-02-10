"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var validation_message_module_1 = require("../shared/components/validation-message/validation-message.module");
var home_component_1 = require("./home.component");
var home_routing_module_1 = require("./home.routing.module");
var sign_in_component_1 = require("./sign-in/sign-in.component");
var singup_component_1 = require("./singup/singup.component");
var singup_service_1 = require("./singup/singup.service");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            declarations: [
                sign_in_component_1.SignInComponent,
                singup_component_1.SingupComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                validation_message_module_1.ValidationMessageModule,
                router_1.RouterModule,
                home_routing_module_1.HomeRoutingModule
            ],
            providers: [
                singup_service_1.SingupService
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
