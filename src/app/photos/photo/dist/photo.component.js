"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoComponent = void 0;
var core_1 = require("@angular/core");
var CLOUD = 'http://localhost:3000/imgs/';
var PhotoComponent = /** @class */ (function () {
    function PhotoComponent() {
        this._url = '';
        this.descripton = "";
    }
    Object.defineProperty(PhotoComponent.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (url) {
            if (!url.startsWith('data')) {
                this._url = CLOUD + url;
            }
            else {
                this._url = url;
            }
        },
        enumerable: false,
        configurable: true
    });
    PhotoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], PhotoComponent.prototype, "descripton");
    __decorate([
        core_1.Input()
    ], PhotoComponent.prototype, "url");
    PhotoComponent = __decorate([
        core_1.Component({
            selector: 'ap-photo',
            templateUrl: './photo.component.html',
            styleUrls: ['./photo.component.css']
        })
    ], PhotoComponent);
    return PhotoComponent;
}());
exports.PhotoComponent = PhotoComponent;
