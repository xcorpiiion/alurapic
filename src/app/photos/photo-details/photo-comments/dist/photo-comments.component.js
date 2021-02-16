"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotoCommentsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var PhotoCommentsComponent = /** @class */ (function () {
    function PhotoCommentsComponent(photoService, formBuilder) {
        this.photoService = photoService;
        this.formBuilder = formBuilder;
    }
    PhotoCommentsComponent.prototype.ngOnInit = function () {
        this.comments$ = this.photoService.getComments(this.id);
        this.commentForm = this.formBuilder.group({
            comment: ['', forms_1.Validators.maxLength(300)]
        });
    };
    PhotoCommentsComponent.prototype.save = function () {
        var _this = this;
        var comment = this.commentForm.get('comment').value;
        this.comments$ = this.photoService.addComment(this.id, comment).pipe(operators_1.switchMap(function () {
            return _this.photoService.getComments(_this.id);
        })).pipe(operators_1.tap(function () {
            _this.commentForm.reset();
        }));
    };
    __decorate([
        core_1.Input()
    ], PhotoCommentsComponent.prototype, "id");
    PhotoCommentsComponent = __decorate([
        core_1.Component({
            selector: 'app-photo-comments',
            templateUrl: './photo-comments.component.html',
            styleUrls: ['./photo-comments.component.css']
        })
    ], PhotoCommentsComponent);
    return PhotoCommentsComponent;
}());
exports.PhotoCommentsComponent = PhotoCommentsComponent;
