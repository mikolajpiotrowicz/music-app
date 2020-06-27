"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = require("react-dom");
var Error_1 = tslib_1.__importDefault(require("./errors/Error"));
var react_router_dom_1 = require("react-router-dom");
var react_router_config_1 = require("react-router-config");
var routes_1 = require("../server/routes/routes");
var AppContext_1 = require("./AppContext");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var globalStyles_1 = require("./styles/globalStyles");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faAsterisk, free_solid_svg_icons_1.faTable);
if (module.hot) {
    module.hot.accept();
}
var initialData = window.appData.initialData;
var AppRouter = function () {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(globalStyles_1.GlobalStyles, null),
        react_1.default.createElement(AppContext_1.ContextProvider, { initialState: initialData }, react_router_config_1.renderRoutes(routes_1.routes))));
};
var status = window.appData.statusCode;
if (status !== 200) {
    react_dom_1.hydrate(react_1.default.createElement(Error_1.default, { errorCode: status }), document.querySelector('#app'));
}
else {
    react_dom_1.hydrate(react_1.default.createElement(AppRouter, null), document.querySelector('#app'));
}
