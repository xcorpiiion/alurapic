"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignInComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(formBuilder, authService, router, platformDetectorService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.platformDetectorService = platformDetectorService;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            userName: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    };
    SignInComponent.prototype.login = function () {
        var _this = this;
        var userName = this.loginForm.get('userName').value;
        var password = this.loginForm.get('password').value;
        this.authService.authenticate(userName, password).subscribe(function () {
            return _this.router.navigate(['user', userName]);
        }, function (err) {
            console.log(err);
            _this.loginForm.reset();
            if (_this.platformDetectorService.isPlatformBrowser()) {
                _this.userNameInput.nativeElement.focus();
            }
            alert('Invalid user name or password');
        });
    };
    __decorate([
        core_1.ViewChild('userNameInput')
    ], SignInComponent.prototype, "userNameInput");
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
        })
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
