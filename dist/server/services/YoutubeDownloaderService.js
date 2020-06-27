"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var youtube_mp3_downloader_1 = tslib_1.__importDefault(require("youtube-mp3-downloader"));
var YoutubeDownloaderService = (function () {
    function YoutubeDownloaderService(options, logger) {
        this.youtubeDownloader = new youtube_mp3_downloader_1.default(options);
        this.logger = logger;
        this.initYoutubeDownloader();
    }
    YoutubeDownloaderService.prototype.initYoutubeDownloader = function () {
        var _this = this;
        this.youtubeDownloader.on('progress', function (progress) {
            _this.logger.info(JSON.stringify(progress));
        });
    };
    YoutubeDownloaderService.prototype.mp3Download = function (youtubeId, filename) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2, new Promise(function (resolve, reject) {
                        _this.youtubeDownloader.download(youtubeId, filename);
                        _this.youtubeDownloader.on('finished', function (err, data) {
                            if (err) {
                                _this.logger.error(err);
                                reject(err);
                            }
                            _this.logger.info(JSON.stringify(data));
                            resolve(data);
                        });
                        _this.youtubeDownloader.on('error', function (error) {
                            _this.logger.error(error);
                            reject(error);
                        });
                    })];
            });
        });
    };
    return YoutubeDownloaderService;
}());
exports.YoutubeDownloaderService = YoutubeDownloaderService;
