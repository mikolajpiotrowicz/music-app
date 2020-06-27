"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ModalHandler_1 = require("../../containers/ModalHandler");
var styled_1 = require("./styled");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
exports.Playlist = function () {
    return (react_1.default.createElement(ModalHandler_1.ModalHandler, null, function (renderProps) { return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styled_1.PlaylistTrigger, { onClick: function () { return renderProps.isOpen ? renderProps.closeModal() : renderProps.openModal(); } },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: "#DDD", size: "2x", icon: free_solid_svg_icons_1.faBars })),
        react_1.default.createElement(styled_1.PlaylistWrapper, tslib_1.__assign({}, renderProps),
            react_1.default.createElement(styled_1.PlaylistToolbar, null,
                react_1.default.createElement(styled_1.PlaylistActionButton, null,
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: "#DDD", size: "lg", icon: free_solid_svg_icons_1.faChevronLeft })),
                react_1.default.createElement(styled_1.PlaylistActionButton, null,
                    react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { color: "#DDD", size: "lg", icon: free_solid_svg_icons_1.faChevronRight })),
                react_1.default.createElement(styled_1.PlaylistSearchInput, null))))); }));
};
