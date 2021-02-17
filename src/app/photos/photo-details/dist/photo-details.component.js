"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoDetailsComponent = void 0;
var core_1 = require("@angular/core");
var PhotoDetailsComponent = /** @class */ (function () {
    function PhotoDetailsComponent(route, photoService, router, alertService, userService) {
        this.route = route;
        this.photoService = photoService;
        this.router = router;
        this.alertService = alertService;
        this.userService = userService;
    }
    PhotoDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.id);
        this.photo$.subscribe(function () { }, function (error) {
            console.error(error);
            _this.router.navigate(['not-found']);
        });
    };
    PhotoDetailsComponent.prototype.remove = function () {
        var _this = this;
        this.photoService.remove(this.id).subscribe(function () {
            _this.alertService.sucess('Photo removed', true);
            _this.router.navigate(['/user', _this.userService.getUserName()]);
        }, function (error) {
            console.error(error);
            _this.alertService.warnning('Could not delete the photo!', true);
        });
    };
    PhotoDetailsComponent.prototype.like = function (photo) {
        var _this = this;
        this.photoService.like(photo.id).subscribe(function (liked) {
            if (liked) {
                _this.photo$ = _this.photoService.findById(photo.id);
            }
        });
    };
    PhotoDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-photo-details',
            templateUrl: './photo-details.component.html'
        })
    ], PhotoDetailsComponent);
    return PhotoDetailsComponent;
}());
exports.PhotoDetailsComponent = PhotoDetailsComponent;
