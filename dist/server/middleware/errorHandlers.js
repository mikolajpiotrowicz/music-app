"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var server_1 = require("react-dom/server");
var react_1 = tslib_1.__importDefault(require("react"));
var exceptions_1 = require("../exceptions");
var Error_1 = tslib_1.__importDefault(require("../../app/errors/Error"));
exports.default = (function (logger) {
    var isAjaxRequest = function (req) {
        return req.xhr || (req.headers.accept && req.headers.accept.indexOf('json') > -1);
    };
    var renderError = function (errorCode, err, res, req) {
        res.locals.appData.statusCode = errorCode;
        res.status(errorCode);
        if (isAjaxRequest(req)) {
            res.setHeader('Content-Type', 'application/json');
            return res.send(JSON.stringify({
                status: errorCode,
                message: err.message,
            }));
        }
        var content = server_1.renderToString(react_1.default.createElement(Error_1.default, { errorCode: errorCode }));
        return res.render('index', { content: content });
    };
    var errorHandler404 = function (req, res) {
        return renderError(404, {}, res, req);
    };
    var LOG_TYPE_WARNING = 0;
    var LOG_TYPE_ERROR = 1;
    var errorHandlerGeneric = function (err, req, res, _next) {
        var statusCode;
        var logType;
        switch (err.type) {
            case exceptions_1.NOT_FOUND_ERROR_TYPE:
                statusCode = exceptions_1.NOT_FOUND_ERROR_STATUS;
                logType = LOG_TYPE_WARNING;
                break;
            case exceptions_1.FORBIDDEN_ERROR_TYPE:
                statusCode = exceptions_1.FORBIDDEN_ERROR_STATUS;
                logType = LOG_TYPE_WARNING;
                break;
            case exceptions_1.WITHDRAWN_ERROR_TYPE:
                statusCode = exceptions_1.WITHDRAWN_ERROR_STATUS;
                logType = LOG_TYPE_WARNING;
                break;
            case exceptions_1.BAD_REQUEST_ERROR_TYPE:
                statusCode = exceptions_1.BAD_REQUEST_ERROR_STATUS;
                logType = LOG_TYPE_WARNING;
                break;
            default:
                statusCode = exceptions_1.SERVER_ERROR_STATUS;
                logType = LOG_TYPE_ERROR;
                break;
        }
        var logMessage = "Express " + (logType === LOG_TYPE_ERROR ? 'error' : 'warning') + ": " + statusCode + " " + err.type + " caught: " + err.message + ". Request: " + JSON.stringify({
            isAjaxRequest: isAjaxRequest(req),
            method: req.method,
            url: req.url,
            headers: req.headers,
            body: req.body,
        }) + ". Stack: " + err.stack;
        switch (logType) {
            case LOG_TYPE_ERROR:
                logger.error(logMessage);
                break;
            case LOG_TYPE_WARNING:
                logger.warn(logMessage);
                break;
            default:
                logger.error(logMessage);
                break;
        }
        return renderError(statusCode, err, res, req);
    };
    return {
        errorHandler404: errorHandler404,
        errorHandlerGeneric: errorHandlerGeneric,
        renderError: renderError,
    };
});
