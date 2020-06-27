"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../exceptions");
exports.requestValidatorMiddleware = function (options) {
    return function (req, res, next) {
        var body = req.body;
        options.logger.info(body);
        if (!body.youtubeId)
            throw new exceptions_1.BadRequestError('No youtubeId provided!');
        req.musicObject = {
            youtubeId: body.youtubeId,
            filename: body.filename + ".mp3" || '',
            youtubeVideoQuality: body.quality || 'highest',
        };
        options.logger.info("Request - " + JSON.stringify(body) + " valid");
        return next();
    };
};
