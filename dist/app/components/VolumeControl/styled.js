"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.VolumeRangeControl = styled_components_1.default.input(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: none;\n  position: absolute;\n  right: -180px;\n  top: 50%;\n  transform: translate(-50%, 0);\n  padding-left: 40px;\n\n  &[type='range'] {\n    -webkit-appearance: none;\n    width: 100px;\n    background-color: transparent;\n    transition: 1s all;\n  }\n\n  &[type='range']:focus {\n    outline: none;\n  }\n\n  &[type='range']::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 7px;\n    cursor: pointer;\n    background: #fff;\n    border-radius: 10px;\n    border: 0px solid #010101;\n    margin-bottom: 3px;\n  }\n\n  &[type='range']::-webkit-slider-thumb {\n    height: 16px;\n    width: 16px;\n    border-radius: 8px;\n    background: #fff;\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -4px;\n  }\n\n  &[type='range']:focus::-webkit-slider-runnable-track {\n    background: #fff;\n  }\n\n  &[type='range']::-moz-range-track {\n    width: 100%;\n    height: 31.2px;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    background: #46262c;\n    border-radius: 0px;\n    border: 0px solid #010101;\n  }\n\n  &[type='range']::-moz-range-thumb {\n    box-shadow: 1.8px 1.8px 5.9px rgba(255, 0, 0, 0.49), 0px 0px 1.8px rgba(255, 26, 26, 0.49);\n    border: 2.9px solid #941e00;\n    height: 25px;\n    width: 34px;\n    border-radius: 28px;\n    background: rgba(254, 55, 56, 0.93);\n    cursor: pointer;\n  }\n\n  &[type='range']::-ms-track {\n    width: 100%;\n    height: 31.2px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &[type='range']::-ms-fill-lower {\n    background: #351d22;\n    border: 0px solid #010101;\n    border-radius: 0px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n\n  &[type='range']::-ms-fill-upper {\n    background: #46262c;\n    border: 0px solid #010101;\n    border-radius: 0px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n\n  &[type='range']::-ms-thumb {\n    box-shadow: 1.8px 1.8px 5.9px rgba(255, 0, 0, 0.49), 0px 0px 1.8px rgba(255, 26, 26, 0.49);\n    border: 2.9px solid #941e00;\n    width: 34px;\n    border-radius: 28px;\n    background: rgba(254, 55, 56, 0.93);\n    cursor: pointer;\n    height: 25px;\n  }\n\n  &[type='range']:focus::-ms-fill-lower {\n    background: #46262c;\n  }\n\n  &[type='range']:focus::-ms-fill-upper {\n    background: #572f36;\n  }\n"], ["\n  display: none;\n  position: absolute;\n  right: -180px;\n  top: 50%;\n  transform: translate(-50%, 0);\n  padding-left: 40px;\n\n  &[type='range'] {\n    -webkit-appearance: none;\n    width: 100px;\n    background-color: transparent;\n    transition: 1s all;\n  }\n\n  &[type='range']:focus {\n    outline: none;\n  }\n\n  &[type='range']::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 7px;\n    cursor: pointer;\n    background: #fff;\n    border-radius: 10px;\n    border: 0px solid #010101;\n    margin-bottom: 3px;\n  }\n\n  &[type='range']::-webkit-slider-thumb {\n    height: 16px;\n    width: 16px;\n    border-radius: 8px;\n    background: #fff;\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -4px;\n  }\n\n  &[type='range']:focus::-webkit-slider-runnable-track {\n    background: #fff;\n  }\n\n  &[type='range']::-moz-range-track {\n    width: 100%;\n    height: 31.2px;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    background: #46262c;\n    border-radius: 0px;\n    border: 0px solid #010101;\n  }\n\n  &[type='range']::-moz-range-thumb {\n    box-shadow: 1.8px 1.8px 5.9px rgba(255, 0, 0, 0.49), 0px 0px 1.8px rgba(255, 26, 26, 0.49);\n    border: 2.9px solid #941e00;\n    height: 25px;\n    width: 34px;\n    border-radius: 28px;\n    background: rgba(254, 55, 56, 0.93);\n    cursor: pointer;\n  }\n\n  &[type='range']::-ms-track {\n    width: 100%;\n    height: 31.2px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n  }\n\n  &[type='range']::-ms-fill-lower {\n    background: #351d22;\n    border: 0px solid #010101;\n    border-radius: 0px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n\n  &[type='range']::-ms-fill-upper {\n    background: #46262c;\n    border: 0px solid #010101;\n    border-radius: 0px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n\n  &[type='range']::-ms-thumb {\n    box-shadow: 1.8px 1.8px 5.9px rgba(255, 0, 0, 0.49), 0px 0px 1.8px rgba(255, 26, 26, 0.49);\n    border: 2.9px solid #941e00;\n    width: 34px;\n    border-radius: 28px;\n    background: rgba(254, 55, 56, 0.93);\n    cursor: pointer;\n    height: 25px;\n  }\n\n  &[type='range']:focus::-ms-fill-lower {\n    background: #46262c;\n  }\n\n  &[type='range']:focus::-ms-fill-upper {\n    background: #572f36;\n  }\n"])));
exports.VolumeControlWrapper = styled_components_1.default.button(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  border: none;\n  border-bottom: 10px solid transparent;\n  position: relative;\n  background-color: transparent;\n  padding: 22px 10px 10px 10px;\n  transition: 1s transform ease-in-out;\n  cursor: pointer;\n  &:hover ", " {\n    display: block;\n  }\n  &:hover svg {\n    transform: scale(1.15);\n  }\n"], ["\n  display: flex;\n  border: none;\n  border-bottom: 10px solid transparent;\n  position: relative;\n  background-color: transparent;\n  padding: 22px 10px 10px 10px;\n  transition: 1s transform ease-in-out;\n  cursor: pointer;\n  &:hover ", " {\n    display: block;\n  }\n  &:hover svg {\n    transform: scale(1.15);\n  }\n"])), exports.VolumeRangeControl);
var templateObject_1, templateObject_2;
