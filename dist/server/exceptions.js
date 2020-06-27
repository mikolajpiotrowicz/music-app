"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.FORBIDDEN_ERROR_TYPE = 'ForbiddenError';
exports.NOT_FOUND_ERROR_TYPE = 'NotFoundError';
exports.SERVER_ERROR_TYPE = 'ServerError';
exports.WITHDRAWN_ERROR_TYPE = 'WithdrawnError';
exports.BAD_REQUEST_ERROR_TYPE = 'BadRequestError';
exports.BAD_REQUEST_ERROR_STATUS = 400;
exports.FORBIDDEN_ERROR_STATUS = 403;
exports.NOT_FOUND_ERROR_STATUS = 404;
exports.SERVER_ERROR_STATUS = 500;
exports.WITHDRAWN_ERROR_STATUS = 410;
var UserReadableError = (function (_super) {
    tslib_1.__extends(UserReadableError, _super);
    function UserReadableError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.readableByEndUser = true;
        return _this;
    }
    return UserReadableError;
}(Error));
exports.UserReadableError = UserReadableError;
var WithdrawnError = (function (_super) {
    tslib_1.__extends(WithdrawnError, _super);
    function WithdrawnError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.type = exports.WITHDRAWN_ERROR_TYPE;
        return _this;
    }
    return WithdrawnError;
}(UserReadableError));
exports.WithdrawnError = WithdrawnError;
var NotFoundError = (function (_super) {
    tslib_1.__extends(NotFoundError, _super);
    function NotFoundError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.type = exports.NOT_FOUND_ERROR_TYPE;
        return _this;
    }
    return NotFoundError;
}(UserReadableError));
exports.NotFoundError = NotFoundError;
var ForbiddenError = (function (_super) {
    tslib_1.__extends(ForbiddenError, _super);
    function ForbiddenError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.type = exports.FORBIDDEN_ERROR_TYPE;
        return _this;
    }
    return ForbiddenError;
}(UserReadableError));
exports.ForbiddenError = ForbiddenError;
var BadRequestError = (function (_super) {
    tslib_1.__extends(BadRequestError, _super);
    function BadRequestError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.type = exports.BAD_REQUEST_ERROR_TYPE;
        return _this;
    }
    return BadRequestError;
}(UserReadableError));
exports.BadRequestError = BadRequestError;
var ServerError = (function (_super) {
    tslib_1.__extends(ServerError, _super);
    function ServerError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        _this.type = exports.SERVER_ERROR_TYPE;
        return _this;
    }
    return ServerError;
}(UserReadableError));
exports.ServerError = ServerError;
