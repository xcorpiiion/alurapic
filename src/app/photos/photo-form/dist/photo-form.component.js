"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoFormComponent = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var PhotoFormComponent = /** @class */ (function () {
    function PhotoFormComponent(formBuilder, photoService, router, alertService, userService) {
        this.formBuilder = formBuilder;
        this.photoService = photoService;
        this.router = router;
        this.alertService = alertService;
        this.userService = userService;
        this.percentDone = 0;
    }
    PhotoFormComponent.prototype.ngOnInit = function () {
        this.photoForm = this.formBuilder.group({
            file: ['', forms_1.Validators.required],
            description: ['', forms_1.Validators.maxLength(300)],
            allowComments: [true]
        });
    };
    PhotoFormComponent.prototype.upload = function () {
        var _this = this;
        var description = this.photoForm.get('description').value;
        var allowComments = this.photoForm.get('allowComments').value;
        this.photoService.upload(description, allowComments, this.file)
            .pipe(operators_1.finalize(function () {
            _this.router.navigate(['/user', _this.userService.getUserName()]);
        }))
            .subscribe(function (event) {
            if (event.type == http_1.HttpEventType.UploadProgress) {
                _this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof http_1.HttpResponse) {
                _this.alertService.sucess('Upload complete', true);
                _this.router.navigate(['/user', _this.userService.getUserName()]);
            }
        }, function (erro) {
            console.error(erro);
            _this.alertService.danger('Upload error!', true);
        });
    };
    PhotoFormComponent.prototype.handleFile = function (file) {
        var _this = this;
        this.file = file;
        var reader = new FileReader();
        reader.onload = function (event) { return _this.priview = event.target.result; };
        reader.readAsDataURL(file);
    };
    PhotoFormComponent = __decorate([
        core_1.Component({
            selector: 'app-photo-form',
            templateUrl: './photo-form.component.html',
            styleUrls: ['./photo-form.component.css']
        })
    ], PhotoFormComponent);
    return PhotoFormComponent;
}());
exports.PhotoFormComponent = PhotoFormComponent;
