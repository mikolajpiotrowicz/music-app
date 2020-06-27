"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VibrantFilenameDecoratorService_1 = require("../services/VibrantFilenameDecoratorService");
var Logger_1 = require("../services/Logger");
exports.thumbnailRenameMiddleware = function (options) {
    return function (req, res, next) {
        VibrantFilenameDecoratorService_1.VibrantFilenameDecoratorService(req.musicObject.thumbnailPath, req.musicObject.thumbnailColors)
            .then(function (renamedThumbnailPath) {
            Logger_1.logger.info("Renamed thumbnail path: " + renamedThumbnailPath);
            req.musicObject.thumbnailVibrantPath = renamedThumbnailPath;
            next();
        })
            .catch(function (err) { return res.status(500).send('Problems in renaming thumbnail'); });
    };
};
