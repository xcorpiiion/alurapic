"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GlobalErrorHandler = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var user_service_1 = require("src/app/core/user/user.service");
var Stacktrace = require("stacktrace-js");
var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler(injector) {
        this.injector = injector;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        var location = this.injector.get(common_1.LocationStrategy);
        var userService = this.injector.get(user_service_1.UserService);
        var url = location instanceof common_1.PathLocationStrategy ? location.path() : '';
        var message = error.message ? error.message : error.toString();
        Stacktrace.fromError(error).then(function (stackFrames) {
            var stackAsString = stackFrames
                .map(function (stackFrameString) { return stackFrameString.toString(); })
                .join('\n');
            console.error(message);
            console.error(stackAsString);
        });
    };
    GlobalErrorHandler = __decorate([
        core_1.Injectable()
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}());
exports.GlobalErrorHandler = GlobalErrorHandler;
