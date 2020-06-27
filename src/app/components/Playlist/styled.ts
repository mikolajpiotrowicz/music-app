import styled from 'styled-components';
import { ModalRenderProps } from '../../containers/ModalHandler';

export const PlaylistTrigger = styled.button`
  position: fixed;
  right: 100px;
  top: 100px;
  background: transparent;
  z-index: 200;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 5px;
  width: 44px;
  height: 44px;
  box-shadow: -1px 1px 50px -3px rgba(252, 252, 252, 1);
  cursor: pointer;

  svg {
    margin-right: 2px;
  }

  &:hover {
    transform: scale(1.1);
   svg {
    margin-right: -1px;
  }
  }
`;
export const PlaylistWrapper = styled.div<ModalRenderProps>`
  position: fixed;
  right: 180px;
  top: 100px;
  width: 240px;
  height: 300px;
  background: #444;
  border-radius: 8px;
  box-shadow: -1px 1px 100px -3px rgba(252, 252, 252, 1);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: 0.3s opacity;
`;

export const PlaylistToolbar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 8px 16px;
`;

export const PlaylistSearchInput = styled.input`
  border-radius: 15px;
  background: white;
  color: black;
  border: none;
  width: 130px;
  padding: 0 15px;
  height: 26px;
`;

export const PlaylistActionButton = styled.div`
  width: 30px;
  height: 20px;
  padding-top: 2px;
`;
