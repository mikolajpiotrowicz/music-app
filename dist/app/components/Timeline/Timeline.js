"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var react_draggable_1 = tslib_1.__importDefault(require("react-draggable"));
var AppContext_1 = require("../../AppContext");
var utils_1 = require("../../services/utils");
var const_1 = require("../../services/const");
exports.Timeline = function () {
    var _a = react_1.useState(false), isDragging = _a[0], setDragging = _a[1];
    var _b = react_1.useState(0), lastTime = _b[0], setLastTime = _b[1];
    var _c = react_1.useState(0), currentDrag = _c[0], setCurrentDrag = _c[1];
    var appContext = react_1.useContext(AppContext_1.AppContext);
    var state = appContext.state;
    var currentTime = state.currentTime, audio = state.audio, vibrantColors = state.vibrantColors;
    var getSliderPosition = function () {
        if (audio && audio.duration) {
            return ((isDragging ? lastTime : currentTime) / audio.duration) * const_1.TIMELINE_WIDTH;
        }
        return 0;
    };
    var getTimeElapsedWidth = isDragging
        ? currentDrag + const_1.TIMELINE_BALL_SIZE / 2
        : getSliderPosition() + const_1.TIMELINE_BALL_SIZE;
    var seek = function (time) {
        if (audio) {
            audio.currentTime = time;
            audio.play();
        }
    };
    var handleStart = function () {
        setLastTime(audio ? audio.currentTime : 0);
        setDragging(true);
    };
    var handleDrag = function (e, data) {
        setCurrentDrag(data.x);
    };
    var handleStop = function (e, data) {
        if (audio) {
            var duration = Number(audio.duration.toFixed(2));
            setDragging(false);
            seek((data.x / const_1.TIMELINE_WIDTH) * duration);
        }
    };
    var handleClick = function (e) {
        var rect = e.target.getBoundingClientRect();
        var current = e.clientX - rect.left;
        if (current > 5) {
            seek(((current - const_1.TIMELINE_BALL_SIZE / 2) / const_1.TIMELINE_WIDTH) *
                Number(audio && audio.duration.toFixed(2)));
        }
    };
    return (react_1.default.createElement(styled_1.TimelineWrapper, null,
        react_1.default.createElement(styled_1.Time, { current: true }, utils_1.convertSecToDisplayTime(currentTime)),
        react_1.default.createElement(styled_1.Time, null, utils_1.convertSecToDisplayTime(audio && audio.duration)),
        react_1.default.createElement(styled_1.TimelineBackground, { onClick: handleClick }),
        react_1.default.createElement(styled_1.TimeElapsed, { colors: vibrantColors, style: { width: getTimeElapsedWidth } }),
        react_1.default.createElement(react_draggable_1.default, { axis: "x", handle: ".handle", defaultPosition: { x: 0, y: 0 }, bounds: { top: 0, left: 0, right: 730, bottom: 0 }, position: { x: getSliderPosition(), y: 0 }, onStart: handleStart, onDrag: handleDrag, onStop: handleStop },
            react_1.default.createElement("div", null,
                react_1.default.createElement(styled_1.TimelineDot, { className: "handle" })))));
};
