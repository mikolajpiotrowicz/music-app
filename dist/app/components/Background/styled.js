"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.BackgroundWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  background: cornflowerblue;\n  ", ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n"], ["\n  background: cornflowerblue;\n  ",
    ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n"])), function (props) {
    return props.colors &&
        " background: -webkit-linear-gradient(left, " + props.colors.DarkVibrant + ", " + props.colors.Vibrant + ", " + props.colors.DarkVibrant + ")";
});
var templateObject_1;
