import React from 'react';
import styled from 'styled-components';

const LogoBase: React.FC<React.HTMLAttributes<HTMLImageElement>> = ({ className }) => (
  <img
    className={className}
    src="https://chakras-music-player.s3-eu-west-1.amazonaws.com/assets/logo.png"
  />
);

export const Logo = styled(LogoBase)`
  max-height: 150px;
  position: absolute;
  left: 90px;
  top: 90px;
  transform: translate(-50%, -50%);
  transition: 0.5s all;

  &:hover {
    max-height: 165px;
    -webkit-filter: drop-shadow(1px 1px 1px #ddd);
    filter: drop-shadow(1px 1px 1px #ddd);
  }
`;
