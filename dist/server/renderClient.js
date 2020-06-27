"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var server_1 = require("react-dom/server");
var react_router_config_1 = require("react-router-config");
var styled_components_1 = require("styled-components");
var react_router_dom_1 = require("react-router-dom");
var AppContext_1 = require("../app/AppContext");
var routes_1 = require("./routes/routes");
exports.renderClient = function (req, res, initialData) {
    res.locals.appData.initialData = initialData;
    var sheet = new styled_components_1.ServerStyleSheet();
    var content = server_1.renderToString(sheet.collectStyles(react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url },
        react_1.default.createElement(AppContext_1.ContextProvider, { initialState: initialData }, react_router_config_1.renderRoutes(routes_1.routes)))));
    var styleTags = sheet.getStyleTags();
    res.render('index', {
        content: content,
        styleTags: styleTags,
    });
};
