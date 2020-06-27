import styled from 'styled-components';

export const ControlsWrapper = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  position: fixed;
  top: 84%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ControlButton = styled.button`
  border: none;
  background: transparent;
  padding: 10px;
  transition: 1s transform ease-in-out;
  cursor: pointer;

  &:hover svg {
    transform: scale(1.15);
  }
`;
