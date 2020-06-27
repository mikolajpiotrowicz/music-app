"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_config_1 = require("react-router-config");
exports.AppRoot = function (_a) {
    var route = _a.route;
    return react_1.default.createElement("main", null, react_router_config_1.renderRoutes(route.routes));
};
