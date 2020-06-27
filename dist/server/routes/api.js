"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var requestValidatorMiddleware_1 = require("../middleware/requestValidatorMiddleware");
var musicDownloadMiddleware_1 = require("../middleware/musicDownloadMiddleware");
var s3uploadMiddleware_1 = require("../middleware/s3uploadMiddleware");
var thumbnailDownloadMiddleware_1 = require("../middleware/thumbnailDownloadMiddleware");
var thumbnailRenameMiddleware_1 = require("../middleware/thumbnailRenameMiddleware");
var serveDebugMiddleware_1 = require("../middleware/serveDebugMiddleware");
exports.default = createApiRouter;
function createApiRouter(_a) {
    var log = _a.log, config = _a.config;
    var router = express_1.Router();
    router.post('/music/process', requestValidatorMiddleware_1.requestValidatorMiddleware({ logger: log }), musicDownloadMiddleware_1.musicDownloadMiddleware({ config: config, logger: log }), thumbnailDownloadMiddleware_1.thumbnailDownloadMiddleware({ config: config }), thumbnailRenameMiddleware_1.thumbnailRenameMiddleware({ config: config }), s3uploadMiddleware_1.S3uploadMiddleware({ config: config, logger: log }));
    router.get('/debug', serveDebugMiddleware_1.serveDebugMiddleware({ config: config }));
    router.all('/', function (_req, res) {
        res.sendStatus(405);
    });
    return router;
}
