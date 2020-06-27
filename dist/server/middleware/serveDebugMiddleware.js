"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = tslib_1.__importDefault(require("fs"));
var Logger_1 = require("../services/Logger");
exports.serveDebugMiddleware = function (options) {
    return function (req, res, next) {
        fs_1.default.readFile('info.log', 'utf8', function (err, data) {
            if (err)
                throw err;
            Logger_1.logger.info('Successfully read log file');
            res.send(data);
        });
    };
};
