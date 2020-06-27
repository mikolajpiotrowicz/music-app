import React, { useContext } from 'react';
import { VolumeControlWrapper, VolumeRangeControl } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../AppContext';

export const VolumeControl: React.FC<{}> = () => {
  const appContxt = useContext(AppContext);
  const { state } = appContxt;
  const { audio } = state;

  const setVolume = (value: number) => {
    if (audio) {
      audio.volume = value / 100;
    }
  };

  return (
    <VolumeControlWrapper>
      <FontAwesomeIcon color="#DDD" size="2x" icon={faVolumeUp} />
      <VolumeRangeControl
        onChange={e => {
          setVolume(Number(e.target.value));
        }}
        className="volumeControl"
        id="volumeControl"
        defaultValue="50"
        type="range"
      />
    </VolumeControlWrapper>
  );
};
