import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TimelineDot, TimelineWrapper, TimelineBackground, Time, TimeElapsed } from './styled';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { AppContext } from '../../AppContext';
import { convertSecToDisplayTime } from '../../services/utils';
import { TIMELINE_BALL_SIZE, TIMELINE_WIDTH } from '../../services/const';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';

export const Timeline: React.FC<{}> = () => {
  const [isDragging, setDragging] = useState(false);
  const [lastTime, setLastTime] = useState(0);
  const [currentDrag, setCurrentDrag] = useState(0);
  
  const appContext = useContext(AppContext);
  const { state } = appContext;
  const { currentTime, audio, vibrantColors } = state;

  const getSliderPosition = () => {
    if (audio && audio.duration) {
      return ((isDragging ? lastTime : currentTime) / audio.duration) * TIMELINE_WIDTH;
    }
    return 0;
  };
  const getTimeElapsedWidth = isDragging
    ? currentDrag + TIMELINE_BALL_SIZE / 2
    : getSliderPosition() + TIMELINE_BALL_SIZE;

  const seek = (time: number) => {
    if (audio) {
      audio.currentTime = time;
      audio.play();
    }
  };

  const handleStart = () => {
    setLastTime(audio ? audio.currentTime : 0);
    setDragging(true);
  };
  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentDrag(data.x);
  };
  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    if (audio) {
      const duration = Number(audio.duration.toFixed(2));
      setDragging(false);
      seek((data.x / TIMELINE_WIDTH) * duration);
    }
  };
  const handleClick = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const current = e.clientX - rect.left;
    if (current > 5) {
      seek(
        ((current - TIMELINE_BALL_SIZE / 2) / TIMELINE_WIDTH) *
          Number(audio && audio.duration.toFixed(2)),
      );
    }
  };

 
  return (
    <TimelineWrapper>
      <Time current>{convertSecToDisplayTime(currentTime)}</Time>
      <Time>{convertSecToDisplayTime(audio && audio.duration)}</Time>

      <TimelineBackground onClick={handleClick} />
      <TimeElapsed colors={vibrantColors} style={{ width: getTimeElapsedWidth }} />
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        bounds={{ top: 0, left: 0, right: 730, bottom: 0 }}
        position={{ x: getSliderPosition(), y: 0 }}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
      >
        <div>
          <TimelineDot className="handle" />
        </div>
      </Draggable>
    </TimelineWrapper>
  );
};
