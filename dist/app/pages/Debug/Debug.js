"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var debug_1 = require("../../services/API/debug");
exports.Debug = function () {
    var _a = react_1.default.useState([]), logs = _a[0], setLogs = _a[1];
    var fetchDebug = react_1.default.useCallback(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var response, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, debug_1.getDebug()];
                case 1:
                    response = _a.sent();
                    setLogs(debug_1.debugResponseTransformer(response.data));
                    return [3, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); }, []);
    react_1.default.useEffect(function () {
        fetchDebug();
    }, []);
    return (react_1.default.createElement("div", null,
        "Debug",
        react_1.default.createElement("div", null, logs.map(function (log) { return (react_1.default.createElement("div", null, log.message)); }))));
};
