"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var LogoBase = function (_a) {
    var className = _a.className;
    return (react_1.default.createElement("img", { className: className, src: "https://chakras-music-player.s3-eu-west-1.amazonaws.com/assets/logo.png" }));
};
exports.Logo = styled_components_1.default(LogoBase)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  max-height: 150px;\n  position: absolute;\n  left: 90px;\n  top: 90px;\n  transform: translate(-50%, -50%);\n  transition: 0.5s all;\n\n  &:hover {\n    max-height: 165px;\n    -webkit-filter: drop-shadow(1px 1px 1px #ddd);\n    filter: drop-shadow(1px 1px 1px #ddd);\n  }\n"], ["\n  max-height: 150px;\n  position: absolute;\n  left: 90px;\n  top: 90px;\n  transform: translate(-50%, -50%);\n  transition: 0.5s all;\n\n  &:hover {\n    max-height: 165px;\n    -webkit-filter: drop-shadow(1px 1px 1px #ddd);\n    filter: drop-shadow(1px 1px 1px #ddd);\n  }\n"])));
var templateObject_1;
