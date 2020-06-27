"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNode_1 = require("./isNode");
var Player = (function () {
    function Player() {
        console.warn(isNode_1.isNode);
        if (!isNode_1.isNode) {
            this.sound = document.createElement('audio');
        }
        this.playing = false;
        this.url = '';
        this.setEvents();
        this.setSrc();
    }
    Player.prototype.setSrc = function () {
        this.url = "http://localhost:3900/download?id=music/Albums/Evil%20Pimp%20-%20Face%20The%20Terror/Dont%20Turn%20Around%20feat%20Stan%20Man.mp3";
        if (this.sound) {
            this.sound.src = "http://localhost:3900/download?id=music/Albums/Evil%20Pimp%20-%20Face%20The%20Terror/Dont%20Turn%20Around%20feat%20Stan%20Man.mp3";
        }
    };
    Player.prototype.setEvents = function () {
        var _this = this;
        if (this.sound) {
            this.sound.addEventListener('timeupdate', function () { });
            this.sound.addEventListener('canplay', function () {
                console.log('can play!');
                _this.play();
            });
            this.sound.addEventListener('loadedmetadata', function () {
                console.log('loadmetadata');
                _this.sound.currentTime = 0;
            });
            this.sound.addEventListener('ended', function () { });
        }
    };
    Player.prototype.play = function () {
        this.sound.play();
        this.playing = true;
    };
    Player.prototype.pause = function () {
        this.sound.pause();
        this.playing = false;
    };
    Player.prototype.toggle = function () {
        if (!this.playing) {
            this.play();
        }
        else {
            this.pause();
        }
    };
    Player.prototype.setVolume = function (volume) {
        this.sound.volume = volume;
    };
    Player.prototype.seek = function (time) {
        this.sound.currentTime = time;
        this.sound.play();
    };
    return Player;
}());
exports.player = new Player();
