"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ModalHandler_1 = require("../../containers/ModalHandler");
var shared_1 = require("../../styles/shared");
var styled_1 = require("./styled");
exports.AddSong = function () {
    return (react_1.default.createElement(ModalHandler_1.ModalHandler, null, function (renderProps) { return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(shared_1.Overlay, null),
        react_1.default.createElement(styled_1.AddSongWBody, null, "xd"))); }));
};
