"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var API = 'http://localhost:3000/';
var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
    }
    PhotoService.prototype.listFromUser = function (userName) {
        return this.http.get(API + userName + '/photos');
    };
    PhotoService.prototype.listFromUserPaginated = function (userName, page) {
        var params = new http_1.HttpParams().append('pages', page.toString());
        return this.http.get(API + userName + '/photos', { params: params });
    };
    PhotoService.prototype.upload = function (description, allowComments, file) {
        var formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments ? 'true' : 'false');
        formData.append('imageFile', file);
        return this.http.post(API + 'photos/upload', formData);
    };
    PhotoService.prototype.findById = function (id) {
        return this.http.get(API + 'photos/' + id);
    };
    PhotoService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], PhotoService);
    return PhotoService;
}());
exports.PhotoService = PhotoService;
