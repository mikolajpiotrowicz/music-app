import styled from 'styled-components';
import { TIMELINE_BALL_SIZE, TIMELINE_WIDTH } from '../../services/const';
import { ParsedVibrantColors } from '../../services/parseVibrantColors';

export const TimelineWrapper = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 88%;
  left: 50%;
  width: ${TIMELINE_WIDTH}px;
`;
export const TimelineDot = styled.div`
  width: ${TIMELINE_BALL_SIZE}px;
  height: ${TIMELINE_BALL_SIZE}px;
  background-color: #ddd;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  z-index: 102;
  cursor: pointer;
`;

export const TimelineBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 750px;
  height: 14px;
  background-color: #444;
  margin-top: 4px;
  border-radius: 10px;
  z-index: 0;
`;

export const Time = styled.p<{ current?: boolean }>`
  font-size: 18px;
  color: #ddd;
  right: -80px;
  font-weight: bold;
  position: absolute;
  top: -20px;
  transform: translate(-50%, 0);
  ${props =>
    props.current &&
    `
    right: unset;
    left: -50px;
  `}
`;

export const TimeElapsed = styled.div<{ colors?: ParsedVibrantColors }>`
  position: absolute;
  top: 0;
  left: -1px;
  width: 0;
  height: 14px;
  margin-top: 4px;
  border-radius: 10px;
  z-index: 0;
  pointer-events: none;
  background: rgb(46, 162, 175);
  ${props => props.colors && `background: ${props.colors.LightVibrant}`};
`;
