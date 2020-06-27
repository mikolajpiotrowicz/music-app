"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) ===
    '[object process]';
