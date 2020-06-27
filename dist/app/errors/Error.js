"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var NotFoundError_1 = tslib_1.__importDefault(require("./NotFoundError"));
var ForbiddenError_1 = tslib_1.__importDefault(require("./ForbiddenError"));
var ServerError_1 = tslib_1.__importDefault(require("./ServerError"));
var Error = function (_a) {
    var errorCode = _a.errorCode;
    switch (errorCode) {
        case 403:
            return react_1.default.createElement(ForbiddenError_1.default, null);
        case 404:
            return react_1.default.createElement(NotFoundError_1.default, null);
        default:
            return react_1.default.createElement(ServerError_1.default, null);
    }
};
exports.default = Error;
