"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var styled_2 = require("./styled");
exports.TrackName = function () {
    return (react_1.default.createElement(styled_2.TrackNameWrapper, null,
        react_1.default.createElement(styled_1.ArtistName, null, "Astrix"),
        react_1.default.createElement(styled_1.SongName, null, "Deep Jungle Walk")));
};
