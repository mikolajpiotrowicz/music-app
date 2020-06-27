import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  z-index: 10;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  .a {
    transform: rotateY(0deg) translateZ(250px);
  }

  .b {
    transform: rotateY(60deg) translateZ(250px);
  }

  .c {
    transform: rotateY(120deg) translateZ(250px);
  }

  .d {
    transform: rotateY(180deg) translateZ(250px);
  }

  .e {
    transform: rotateY(240deg) translateZ(250px);
  }

  .f {
    transform: rotateY(300deg) translateZ(250px);
  }
`;

export const ImagesWrapper = styled.div<{ currentRotation: number }>`
  height: 100%;
  width: 100%;
  position: absolute;
  will-change: transform;
  transform-style: preserve-3d;
  transition: transform 1s;
  transform: rotateY(${props => props.currentRotation}deg);
`;

export const CarouselItem = styled.div`
  display: block;
  position: absolute;
  background: transparent;
  width: 300px;
  height: 300px;
  line-height: 200px;
  font-size: 5em;
  text-align: center;
  color: #fff;
  opacity: 0.95;
  border-radius: 10px;
  user-select: none;
`;

export const AlbumCover = styled.img`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 240px;
  box-shadow: -1px 1px 300px -3px rgba(252, 252, 252, 1);
  z-index: 100;
  user-select: none;
`;
