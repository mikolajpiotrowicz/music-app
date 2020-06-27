"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var winston_1 = tslib_1.__importDefault(require("winston"));
var moment_1 = tslib_1.__importDefault(require("moment"));
exports.logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    defaultMeta: { date: moment_1.default().format('DD-MM-YYYY hh:mm:ss'), timestamp: new Date().getTime() },
    transports: [new winston_1.default.transports.File({ filename: 'info.log' })],
});
