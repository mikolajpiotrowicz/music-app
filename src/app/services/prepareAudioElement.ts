import { isNode } from './isNode';

export const prepareAudioElement = (setCurrentTime?: (time: number) => void) => {
  if (isNode || !setCurrentTime) {
    return undefined;
  }
  const audioElement = document.createElement('audio');
  audioElement.addEventListener('timeupdate', () => {
    setCurrentTime(audioElement.currentTime);
  });
  audioElement.addEventListener('canplay', () => {
    audioElement.play();
  });
  audioElement.addEventListener('loadedmetadata', () => {
    audioElement.currentTime = 0;
  });
  audioElement.addEventListener('ended', () => {});
  audioElement.src = `https://chakras-music-player.s3-eu-west-1.amazonaws.com/music/Wez+pigulke.mp3.mp3`;
  
  return audioElement;
};
