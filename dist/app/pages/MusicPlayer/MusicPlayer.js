"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Background_1 = require("../../components/Background");
var AudioControls_1 = require("../../components/AudioControls");
var Timeline_1 = require("../../components/Timeline");
var TrackName_1 = require("../../components/TrackName");
var Carousel_1 = require("../../components/Carousel");
var Playlist_1 = require("../../components/Playlist");
var Logo_1 = require("../../components/Logo/Logo");
exports.MusicPlayer = function () {
    return (react_1.default.createElement(Background_1.Background, null,
        react_1.default.createElement(Logo_1.Logo, null),
        react_1.default.createElement(Playlist_1.Playlist, null),
        react_1.default.createElement(Carousel_1.Carousel, null),
        react_1.default.createElement(TrackName_1.TrackName, null),
        react_1.default.createElement(Timeline_1.Timeline, null),
        react_1.default.createElement(AudioControls_1.AudioControls, null)));
};
