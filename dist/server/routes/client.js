"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var renderClient_1 = require("../renderClient");
exports.default = createRouter;
function createRouter(_a) {
    var log = _a.log, config = _a.config;
    var router = express_1.Router();
    router.get('/', function (req, res) {
        var initialData = {
            currentTime: 0,
            carouselRotation: 0,
        };
        renderClient_1.renderClient(req, res, initialData);
    });
    router.get('/debug', function (req, res) {
        var initialData = {
            currentTime: 0,
            carouselRotation: 0,
        };
        renderClient_1.renderClient(req, res, initialData);
    });
    router.all('/', function (_req, res) {
        res.sendStatus(405);
    });
    return router;
}
