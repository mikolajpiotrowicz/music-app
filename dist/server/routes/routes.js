"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Root_1 = require("../../app/components/Root");
var MusicPlayer_1 = require("../../app/pages/MusicPlayer");
var Error_1 = tslib_1.__importDefault(require("../../app/errors/Error"));
var Debug_1 = require("../../app/pages/Debug");
exports.routes = [
    {
        component: Root_1.AppRoot,
        routes: [
            { path: '/', exact: true, component: MusicPlayer_1.MusicPlayer },
            { path: '/debug', exact: true, component: Debug_1.Debug },
            {
                path: '/*',
                render: function (props) { return react_1.default.createElement(Error_1.default, tslib_1.__assign({ errorCode: 404 }, props)); },
            },
        ],
    },
];
