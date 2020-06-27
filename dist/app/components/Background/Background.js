"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var AppContext_1 = require("../../AppContext");
exports.Background = function (_a) {
    var children = _a.children;
    var appContext = react_1.useContext(AppContext_1.AppContext);
    var state = appContext.state;
    var vibrantColors = state.vibrantColors;
    return react_1.default.createElement(styled_1.BackgroundWrapper, { colors: vibrantColors }, children);
};
