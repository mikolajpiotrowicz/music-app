"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var VolumeControl_1 = require("../VolumeControl");
var AppContext_1 = require("../../AppContext");
exports.AudioControls = function () {
    var appContext = react_1.useContext(AppContext_1.AppContext);
    var state = appContext.state, actions = appContext.actions;
    var audio = state.audio;
    var toggle = actions.toggle, next = actions.next, previous = actions.previous;
    var isPlaying = audio && audio.paused;
    console.log('LOG LOG ');
    return (react_1.default.createElement(styled_1.ControlsWrapper, null,
        react_1.default.createElement(styled_1.ControlButton, null,
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: "#DDD", size: "2x", icon: free_solid_svg_icons_1.faRedoAlt })),
        react_1.default.createElement(styled_1.ControlButton, { onClick: previous },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: "#DDD", size: "2x", icon: free_solid_svg_icons_1.faStepBackward })),
        react_1.default.createElement(styled_1.ControlButton, { onClick: toggle },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: "#DDD", size: "2x", icon: isPlaying ? free_solid_svg_icons_1.faPlay : free_solid_svg_icons_1.faPause })),
        react_1.default.createElement(styled_1.ControlButton, { onClick: next },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: "#DDD", size: "2x", icon: free_solid_svg_icons_1.faStepForward })),
        react_1.default.createElement(VolumeControl_1.VolumeControl, null)));
};
