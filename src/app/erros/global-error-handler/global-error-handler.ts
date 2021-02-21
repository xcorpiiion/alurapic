import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";
import * as Stacktrace from "stacktrace-js"

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) {

    }

    handleError(error: any): void {
        const location = this.injector.get(LocationStrategy)
        const userService = this.injector.get(UserService)
        const url = location instanceof PathLocationStrategy ? location.path() : ''
        const message = error.message ? error.message : error.toString()
        Stacktrace.fromError(error).then(stackFrames => {
            const stackAsString = stackFrames
                .map(stackFrameString => stackFrameString.toString())
                .join('\n')
            console.error(message);
            console.error(stackAsString);
        })
    }
}
