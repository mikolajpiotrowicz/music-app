"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var client_1 = require("./client");
exports.getDebug = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, client_1.axiosInstance.get('/debug')];
}); }); };
exports.debugResponseTransformer = function (response) {
    var messages = [];
    var parts = response.split('\n');
    parts.forEach(function (part) {
        console.log(part);
        if (part !== '') {
            messages.push(JSON.parse(part));
        }
    });
    return messages;
};
