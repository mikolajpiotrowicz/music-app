"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getCallingModuleName = function (callingModule) {
    var parts = callingModule.filename.split('/');
    return parts[parts.length - 2] + "/" + parts.pop();
};
var createLogger = function (module) {
    var moduleName = '';
    if (typeof module === 'string') {
        moduleName = module;
    }
    else if (module !== null) {
        moduleName = getCallingModuleName(module);
    }
    return console;
};
exports.default = createLogger;
