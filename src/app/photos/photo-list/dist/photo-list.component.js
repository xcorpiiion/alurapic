"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoListComponent = void 0;
var core_1 = require("@angular/core");
var PhotoListComponent = /** @class */ (function () {
    function PhotoListComponent(activetedRoute, photoService) {
        this.activetedRoute = activetedRoute;
        this.photoService = photoService;
        this.photos = [];
        this.filter = '';
        this.hasMore = true;
        this.currentPage = 1;
        this.userName = '';
    }
    PhotoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activetedRoute.params.subscribe(function (params) {
            _this.userName = params.userName;
            _this.photos = _this.activetedRoute.snapshot.data.photos;
        });
    };
    PhotoListComponent.prototype.load = function () {
        var _this = this;
        this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(function (photos) {
            _this.photos = _this.photos.concat(photos);
            if (!photos.length) {
                _this.hasMore = !photos.length;
            }
        });
    };
    PhotoListComponent = __decorate([
        core_1.Component({
            selector: 'app-photo-list',
            templateUrl: './photo-list.component.html',
            styleUrls: ['./photo-list.component.css']
        })
    ], PhotoListComponent);
    return PhotoListComponent;
}());
exports.PhotoListComponent = PhotoListComponent;
