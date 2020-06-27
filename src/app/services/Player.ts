import { isNode } from './isNode';

class Player {
  private playing: boolean;
  public url: string;
  public sound!: HTMLAudioElement;

  constructor() {
    console.warn(isNode);
    if (!isNode) {
      this.sound = document.createElement('audio');
    }

    this.playing = false;
    this.url = '';
    this.setEvents();
    this.setSrc();
  }

  setSrc() {
    this.url = `http://localhost:3900/download?id=music/Albums/Evil%20Pimp%20-%20Face%20The%20Terror/Dont%20Turn%20Around%20feat%20Stan%20Man.mp3`;
    if (this.sound) {
      this.sound.src = `http://localhost:3900/download?id=music/Albums/Evil%20Pimp%20-%20Face%20The%20Terror/Dont%20Turn%20Around%20feat%20Stan%20Man.mp3`;
    }
  }
  setEvents() {
    if (this.sound) {
      this.sound.addEventListener('timeupdate', () => {});
      this.sound.addEventListener('canplay', () => {
        console.log('can play!');
        this.play();
      });
      this.sound.addEventListener('loadedmetadata', () => {
        console.log('loadmetadata');
        this.sound.currentTime = 0;
      });
      this.sound.addEventListener('ended', () => {});
    }
  }

  play() {
    this.sound.play();
    this.playing = true;
  }

  pause() {
    this.sound.pause();
    this.playing = false;
  }

  toggle() {
    if (!this.playing) {
      this.play();
    } else {
      this.pause();
    }
  }
  setVolume(volume: any) {
    this.sound.volume = volume;
  }
  seek(time: any) {
    this.sound.currentTime = time;
    this.sound.play();
  }
}
export const player = new Player();
