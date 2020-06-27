"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.ControlsWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  width: 500px;\n  justify-content: space-between;\n  position: fixed;\n  top: 84%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  display: flex;\n  width: 500px;\n  justify-content: space-between;\n  position: fixed;\n  top: 84%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
exports.ControlButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  border: none;\n  background: transparent;\n  padding: 10px;\n  transition: 1s transform ease-in-out;\n  cursor: pointer;\n\n  &:hover svg {\n    transform: scale(1.15);\n  }\n"], ["\n  border: none;\n  background: transparent;\n  padding: 10px;\n  transition: 1s transform ease-in-out;\n  cursor: pointer;\n\n  &:hover svg {\n    transform: scale(1.15);\n  }\n"])));
var templateObject_1, templateObject_2;
