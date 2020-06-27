"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var config_1 = tslib_1.__importStar(require("./infra/config"));
var logger_1 = tslib_1.__importDefault(require("./infra/logger"));
var server_1 = tslib_1.__importDefault(require("./server"));
var log = logger_1.default(module);
config_1.logCurrentConfig(log);
var startApp = server_1.default({
    config: config_1.default,
    log: log
}).startApp;
setupProcessHooks();
startApp()
    .then(function () {
    log.info('Service is up');
})
    .catch(function (err) {
    log.error('Startup error', err);
    exitProcessWithError('Startup error');
});
function setupProcessHooks() {
    process.on('uncaughtException', function (err) {
        log.error('Uncaught exception', err);
        exitProcessWithError('Uncaught exception');
    });
    process.on('SIGINT', function () {
        exitProcessWithError('SIGINT received, shutting down app');
    });
}
function exitProcessWithError(errorMsg) {
    log.error('Shutting down app: ', errorMsg);
    process.exit(1);
}
