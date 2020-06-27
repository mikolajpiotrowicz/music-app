"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var const_1 = require("../../services/const");
exports.TimelineWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: fixed;\n  transform: translate(-50%, -50%);\n  top: 88%;\n  left: 50%;\n  width: ", "px;\n"], ["\n  position: fixed;\n  transform: translate(-50%, -50%);\n  top: 88%;\n  left: 50%;\n  width: ", "px;\n"])), const_1.TIMELINE_WIDTH);
exports.TimelineDot = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  background-color: #ddd;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: '';\n  z-index: 102;\n  cursor: pointer;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  background-color: #ddd;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: '';\n  z-index: 102;\n  cursor: pointer;\n"])), const_1.TIMELINE_BALL_SIZE, const_1.TIMELINE_BALL_SIZE);
exports.TimelineBackground = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 750px;\n  height: 14px;\n  background-color: #444;\n  margin-top: 4px;\n  border-radius: 10px;\n  z-index: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 750px;\n  height: 14px;\n  background-color: #444;\n  margin-top: 4px;\n  border-radius: 10px;\n  z-index: 0;\n"])));
exports.Time = styled_components_1.default.p(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  font-size: 18px;\n  color: #ddd;\n  right: -80px;\n  font-weight: bold;\n  position: absolute;\n  top: -20px;\n  transform: translate(-50%, 0);\n  ", "\n"], ["\n  font-size: 18px;\n  color: #ddd;\n  right: -80px;\n  font-weight: bold;\n  position: absolute;\n  top: -20px;\n  transform: translate(-50%, 0);\n  ",
    "\n"])), function (props) {
    return props.current &&
        "\n    right: unset;\n    left: -50px;\n  ";
});
exports.TimeElapsed = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: -1px;\n  width: 0;\n  height: 14px;\n  margin-top: 4px;\n  border-radius: 10px;\n  z-index: 0;\n  pointer-events: none;\n  background: rgb(46, 162, 175);\n  ", ";\n"], ["\n  position: absolute;\n  top: 0;\n  left: -1px;\n  width: 0;\n  height: 14px;\n  margin-top: 4px;\n  border-radius: 10px;\n  z-index: 0;\n  pointer-events: none;\n  background: rgb(46, 162, 175);\n  ", ";\n"])), function (props) { return props.colors && "background: " + props.colors.LightVibrant; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
