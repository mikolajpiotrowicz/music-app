"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNode_1 = require("./isNode");
exports.prepareAudioElement = function (setCurrentTime) {
    if (isNode_1.isNode || !setCurrentTime) {
        return undefined;
    }
    var audioElement = document.createElement('audio');
    audioElement.addEventListener('timeupdate', function () {
        setCurrentTime(audioElement.currentTime);
    });
    audioElement.addEventListener('canplay', function () {
        audioElement.play();
    });
    audioElement.addEventListener('loadedmetadata', function () {
        audioElement.currentTime = 0;
    });
    audioElement.addEventListener('ended', function () { });
    audioElement.src = "https://chakras-music-player.s3-eu-west-1.amazonaws.com/music/Wez+pigulke.mp3.mp3";
    return audioElement;
};
