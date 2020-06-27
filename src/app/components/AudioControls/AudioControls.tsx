import React, { useContext } from 'react';
import { ControlsWrapper, ControlButton } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepBackward,
  faStepForward,
  faRedoAlt,
  faPlay,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import { VolumeControl } from '../VolumeControl';
import { AppContext } from '../../AppContext';

export const AudioControls: React.FC<{}> = () => {
  const appContext = useContext(AppContext);
  const { state, actions } = appContext;
  const { audio } = state;
  const { toggle, next, previous } = actions;
  const isPlaying = audio && audio.paused;

  console.log('LOG LOG ');
  return (
    <ControlsWrapper>
      <ControlButton>
        <FontAwesomeIcon color="#DDD" size="2x" icon={faRedoAlt} />
      </ControlButton>

      <ControlButton onClick={previous}>
        <FontAwesomeIcon color="#DDD" size="2x" icon={faStepBackward} />
      </ControlButton>

      <ControlButton onClick={toggle}>
        <FontAwesomeIcon color="#DDD" size="2x" icon={isPlaying ? faPlay : faPause} />
      </ControlButton>

      <ControlButton onClick={next}>
        <FontAwesomeIcon color="#DDD" size="2x" icon={faStepForward} />
      </ControlButton>

      <VolumeControl />
    </ControlsWrapper>
  );
};
