"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PlatformDetectorService = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var PlatformDetectorService = /** @class */ (function () {
    function PlatformDetectorService(platformId) {
        this.platformId = platformId;
    }
    PlatformDetectorService.prototype.isPlatformBrowser = function () {
        return common_1.isPlatformBrowser(this.platformId);
    };
    PlatformDetectorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(0, core_1.Inject(core_1.PLATFORM_ID))
    ], PlatformDetectorService);
    return PlatformDetectorService;
}());
exports.PlatformDetectorService = PlatformDetectorService;
