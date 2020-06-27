"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var YoutubeDownloaderService_1 = require("../services/YoutubeDownloaderService");
exports.musicDownloadMiddleware = function (options) {
    return function (req, res, next) {
        var config = options.config, logger = options.logger;
        var _a = req.musicObject, filename = _a.filename, youtubeId = _a.youtubeId, youtubeVideoQuality = _a.youtubeVideoQuality;
        var ytServiceOptions = {
            ffmpegPath: config.get('youtubeMp3Downloader.ffmpegPath'),
            outputPath: config.get('youtubeMp3Downloader.outputPath'),
            progressTimeout: config.get('youtubeMp3Downloader.progressTimeout'),
            queueParallelism: config.get('youtubeMp3Downloader.queueParallelism'),
            youtubeVideoQuality: youtubeVideoQuality,
        };
        var ytService = new YoutubeDownloaderService_1.YoutubeDownloaderService(ytServiceOptions, logger);
        ytService
            .mp3Download(youtubeId, filename)
            .then(function (data) {
            var musicObject = req.musicObject;
            musicObject.data = data;
            console.log(data);
            return next();
        })
            .catch(function (err) {
            return next(err);
        });
    };
};
