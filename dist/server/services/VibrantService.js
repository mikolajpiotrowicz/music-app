"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var node_vibrant_1 = tslib_1.__importDefault(require("node-vibrant"));
var fs = tslib_1.__importStar(require("fs"));
exports.convertRGBClrToHex = function (_a) {
    var rgb = _a.rgb;
    var rgbClr = rgb.split(',');
    var r = rgbClr[0];
    var g = rgbClr[1];
    var b = rgbClr[2];
    return ((Number(r) << 16) | (Number(g) << 8) | Number(b)).toString(16).toUpperCase();
};
exports.parseVibrantColors = function (palette) {
    var _a, _b, _c, _d, _e, _f;
    if (!palette) {
        return undefined;
    }
    return {
        Vibrant: exports.convertRGBClrToHex({
            rgb: "rgb(" + ((_a = palette.Vibrant) === null || _a === void 0 ? void 0 : _a.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
        }),
        Muted: exports.convertRGBClrToHex({
            rgb: "rgb(" + ((_b = palette.Muted) === null || _b === void 0 ? void 0 : _b.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
        }),
        DarkVibrant: exports.convertRGBClrToHex({
            rgb: "rgb(" + ((_c = palette.DarkVibrant) === null || _c === void 0 ? void 0 : _c.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
        }),
        DarkMuted: exports.convertRGBClrToHex({
            rgb: "rgb(" + ((_d = palette.DarkMuted) === null || _d === void 0 ? void 0 : _d.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
        }),
        LightVibrant: exports.convertRGBClrToHex({
            rgb: "rgb(" + ((_e = palette.LightVibrant) === null || _e === void 0 ? void 0 : _e.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
        }),
        LightMuted: exports.convertRGBClrToHex({
            rgb: "rgb(" + ((_f = palette.LightMuted) === null || _f === void 0 ? void 0 : _f.getRgb().map(function (color) { return Math.floor(color).toString(); })) + ")",
        }),
    };
};
exports.getVibrantColors = function (filepath) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var palette;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, node_vibrant_1.default.from(fs.readFileSync(filepath)).getPalette()];
            case 1:
                palette = _a.sent();
                return [2, exports.parseVibrantColors(palette)];
        }
    });
}); };
