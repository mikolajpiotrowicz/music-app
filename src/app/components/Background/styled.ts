import styled from 'styled-components';
import { ParsedVibrantColors } from '../../services/parseVibrantColors';

export const BackgroundWrapper = styled.div<{ colors?: ParsedVibrantColors }>`
  background: cornflowerblue;
  ${props =>
    props.colors &&
    ` background: -webkit-linear-gradient(left, ${props.colors.DarkVibrant}, ${props.colors.Vibrant}, ${props.colors.DarkVibrant})`};
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;
