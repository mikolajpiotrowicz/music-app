"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSecToDisplayTime = function (seconds) {
    if (!seconds) {
        return '0:00';
    }
    var minutes = Math.floor(seconds / 60);
    var restSecounds = Math.floor(seconds % 60);
    var secoundsString = restSecounds < 10 ? '0' + restSecounds.toString() : restSecounds.toString();
    return minutes + ":" + secoundsString;
};
