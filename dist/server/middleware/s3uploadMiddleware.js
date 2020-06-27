"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var aws_sdk_1 = require("aws-sdk");
var Logger_1 = require("../services/Logger");
var Utils_1 = require("../services/Utils");
exports.S3uploadMiddleware = function (options) {
    return function (req, res, next) {
        var _a, _b;
        var audioFileBuffer = fs.readFileSync((_a = req.musicObject) === null || _a === void 0 ? void 0 : _a.data.file);
        var thumbnailFileBuffer = fs.readFileSync(req.musicObject.thumbnailVibrantPath);
        var s3 = new aws_sdk_1.S3({ region: 'eu-west-1' });
        Logger_1.logger.info("Saving on s3 thumbnail: " + Utils_1.Utils.removeAppPath(req.musicObject.thumbnailVibrantPath) + ", req: " + req.musicObject);
        var saveAudioFile = s3
            .putObject({
            ACL: 'public-read',
            Bucket: 'chakras-music-player/music',
            Key: "" + ((_b = req.musicObject) === null || _b === void 0 ? void 0 : _b.filename),
            Body: audioFileBuffer,
            ContentType: 'Content-Type: audio/mpeg',
        })
            .promise();
        var saveThumbnail = s3
            .putObject({
            ACL: 'public-read',
            Bucket: 'chakras-music-player/thumbnails',
            Key: Utils_1.Utils.removeAppPath(req.musicObject.thumbnailVibrantPath),
            Body: thumbnailFileBuffer,
            ContentType: 'Content-Type: image/jpg',
        })
            .promise()
            .catch(function (e) { return console.log(e, 'send image error'); });
        Promise.all([saveAudioFile, saveThumbnail])
            .then(function (values) {
            options.logger.info('success', values);
            return res.send(200, req.musicObject);
        })
            .catch(function (e) {
            options.logger.error(e);
            return next(new Error('S3 upload failed!'));
        });
    };
};
