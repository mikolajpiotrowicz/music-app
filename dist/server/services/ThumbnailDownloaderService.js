"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var util_1 = tslib_1.__importDefault(require("util"));
var fs = tslib_1.__importStar(require("fs"));
var node_fetch_1 = tslib_1.__importDefault(require("node-fetch"));
var streamPipeline = util_1.default.promisify(require('stream').pipeline);
function saveThumbnail(url, fileName) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, node_fetch_1.default(url)];
                case 1:
                    response = _a.sent();
                    console.log("Fetching thumbnail: " + url);
                    if (!response.ok)
                        throw new Error("unexpected response " + response.statusText);
                    return [4, streamPipeline(response.body, fs.createWriteStream(fileName))];
                case 2: return [2, _a.sent()];
            }
        });
    });
}
exports.saveThumbnail = saveThumbnail;
