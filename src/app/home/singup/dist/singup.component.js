"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SingupComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var lower_case_validator_1 = require("src/app/shared/validators/lower-case.validator");
var SingupComponent = /** @class */ (function () {
    function SingupComponent(formBuilder, userNotTakenValidatorService, service, router, platformDetectorService) {
        this.formBuilder = formBuilder;
        this.userNotTakenValidatorService = userNotTakenValidatorService;
        this.service = service;
        this.router = router;
        this.platformDetectorService = platformDetectorService;
    }
    SingupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            fullName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(30)]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(14)]],
            userName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(40),
                    lower_case_validator_1.lowerCaseValidatior], this.userNotTakenValidatorService.checkUserNameTaken()]
        });
        if (this.platformDetectorService.isPlatformBrowser()) {
            this.emailInput.nativeElement.focus();
        }
    };
    SingupComponent.prototype.signup = function () {
        var _this = this;
        var newUser = this.signupForm.getRawValue();
        this.service.signup(newUser).subscribe(function () { return _this.router.navigate(['']); }, function (error) { return console.error(error); });
    };
    __decorate([
        core_1.ViewChild('emailInput')
    ], SingupComponent.prototype, "emailInput");
    SingupComponent = __decorate([
        core_1.Component({
            selector: 'app-singup',
            templateUrl: './singup.component.html',
            styleUrls: ['./singup.component.css']
        })
    ], SingupComponent);
    return SingupComponent;
}());
exports.SingupComponent = SingupComponent;
