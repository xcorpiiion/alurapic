"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_1 = require("../core/auth/auth.guard");
var not_found_component_1 = require("../erros/not-found/not-found.component");
var photo_details_component_1 = require("./photo-details/photo-details.component");
var photo_form_component_1 = require("./photo-form/photo-form.component");
var photo_list_component_1 = require("./photo-list/photo-list.component");
var photo_list_resolver_1 = require("./photo-list/photo-list.resolver");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule'
    },
    {
        path: 'user/:userName',
        component: photo_list_component_1.PhotoListComponent,
        resolve: {
            photos: photo_list_resolver_1.PhotoListResolver
        }
    },
    {
        path: 'photo/add',
        component: photo_form_component_1.PhotoFormComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'photo/:photoId',
        component: photo_details_component_1.PhotoDetailsComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: '**/',
        component: not_found_component_1.NotFoundComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
