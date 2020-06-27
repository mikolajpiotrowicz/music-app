"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var client_1 = tslib_1.__importDefault(require("./client"));
var api_1 = tslib_1.__importDefault(require("./api"));
exports.default = createRouter;
function createRouter(_a) {
    var config = _a.config, log = _a.log;
    var router = express_1.default.Router();
    router.use('/', client_1.default({
        config: config,
        log: log,
    }));
    router.use('/api', api_1.default({
        config: config,
        log: log,
    }));
    return router;
}
