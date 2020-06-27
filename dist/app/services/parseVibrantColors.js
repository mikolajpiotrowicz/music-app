"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVibrantColors = function (palette) {
    var _a, _b, _c, _d, _e, _f;
    if (!palette) {
        return undefined;
    }
    return {
        Vibrant: "rgb(" + ((_a = palette.Vibrant) === null || _a === void 0 ? void 0 : _a.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
        Muted: "rgb(" + ((_b = palette.Muted) === null || _b === void 0 ? void 0 : _b.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
        DarkVibrant: "rgb(" + ((_c = palette.DarkVibrant) === null || _c === void 0 ? void 0 : _c.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
        DarkMuted: "rgb(" + ((_d = palette.DarkMuted) === null || _d === void 0 ? void 0 : _d.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
        LightVibrant: "rgb(" + ((_e = palette.LightVibrant) === null || _e === void 0 ? void 0 : _e.getRgb().map(function (color) {
            return Math.floor(color).toString();
        })) + ")",
        LightMuted: "rgb(" + ((_f = palette.LightMuted) === null || _f === void 0 ? void 0 : _f.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
    };
};
