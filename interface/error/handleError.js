"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HandleError {
    constructor() { }
    exceptionFieldNullOrUndefined(args, error) {
        if (args === null || args === undefined)
            throw error;
    }
    exceptionFieldIsEmpty(args, error) {
        if (args === "")
            throw error;
    }
}
exports.default = HandleError;
