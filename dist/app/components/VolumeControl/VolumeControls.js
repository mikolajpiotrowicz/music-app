"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var AppContext_1 = require("../../AppContext");
exports.VolumeControl = function () {
    var appContxt = react_1.useContext(AppContext_1.AppContext);
    var state = appContxt.state;
    var audio = state.audio;
    var setVolume = function (value) {
        if (audio) {
            audio.volume = value / 100;
        }
    };
    return (react_1.default.createElement(styled_1.VolumeControlWrapper, null,
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: "#DDD", size: "2x", icon: free_solid_svg_icons_1.faVolumeUp }),
        react_1.default.createElement(styled_1.VolumeRangeControl, { onChange: function (e) {
                setVolume(Number(e.target.value));
            }, className: "volumeControl", id: "volumeControl", defaultValue: "50", type: "range" })));
};
