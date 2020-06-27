"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
exports.sortedVibrantColors = [
    'Vibrant',
    'Muted',
    'DarkVibrant',
    'DarkMuted',
    'LightVibrant',
    'LightMuted',
];
exports.VibrantFilenameDecoratorService = function (path, colors) {
    return new Promise(function (resolve, reject) {
        var extIndex = path.lastIndexOf('.');
        var newPath = ("" + path.substr(0, extIndex) + exports.sortedVibrantColors.map(function (colorName) { return "" + colors[colorName]; }) + path.substr(extIndex, path.length))
            .replace(',', '')
            .replace('.mp3', '.jpg');
        fs.rename(path, newPath, function (err) {
            if (err) {
                reject("Something went wrong in renaming, " + err);
            }
            console.log("VibrantFilenameDecoratorService newPath: " + newPath);
            resolve(newPath);
        });
    });
};
