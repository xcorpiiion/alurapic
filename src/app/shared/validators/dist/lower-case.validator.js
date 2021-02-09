"use strict";
exports.__esModule = true;
exports.lowerCaseValidatior = void 0;
function lowerCaseValidatior(control) {
    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowerCase: true };
    }
    return null;
}
exports.lowerCaseValidatior = lowerCaseValidatior;
