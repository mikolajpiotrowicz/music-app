import React from 'react';
import { ArtistName, SongName } from './styled';
import { TrackNameWrapper } from './styled';

export const TrackName: React.FC<{}> = () => {
  return (
    <TrackNameWrapper>
      <ArtistName>Astrix</ArtistName>
      <SongName>Deep Jungle Walk</SongName>
    </TrackNameWrapper>
  );
};
