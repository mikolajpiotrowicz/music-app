import React from 'react';
import { Background } from '../../components/Background';
import { AudioControls } from '../../components/AudioControls';
import { Timeline } from '../../components/Timeline';
import { TrackName } from '../../components/TrackName';
import { Carousel } from '../../components/Carousel';
import { Playlist } from '../../components/Playlist';
import { Logo } from '../../components/Logo/Logo';
import { AddSong } from '../../components/AddSong';

export const MusicPlayer = () => {
  return (
    <Background>
      <Logo />
      <Playlist />
      {/*<AddSong />*/}
      <Carousel />
      <TrackName />
      <Timeline />
      <AudioControls />
    </Background>
  );
};
