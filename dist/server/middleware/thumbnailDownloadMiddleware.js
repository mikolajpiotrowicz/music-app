"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ThumbnailDownloaderService_1 = require("../services/ThumbnailDownloaderService");
var VibrantService_1 = require("../services/VibrantService");
exports.thumbnailDownloadMiddleware = function (options) {
    var config = options.config;
    return function (req, res, next) {
        var thumbnail = req.musicObject.data.thumbnail;
        var filename = config.get('thumbnailDownload.outputPath') + "/" + req.musicObject.filename;
        var cleanedThumbnailUrl = thumbnail.slice(0, thumbnail.lastIndexOf('.jpg') + 4);
        ThumbnailDownloaderService_1.saveThumbnail(cleanedThumbnailUrl, filename).then(function () {
            VibrantService_1.getVibrantColors(filename).then(function (colors) {
                req.musicObject.thumbnailColors = colors;
                req.musicObject.thumbnailPath = filename;
                next();
            });
        });
    };
};
