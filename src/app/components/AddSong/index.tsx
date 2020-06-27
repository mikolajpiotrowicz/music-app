import React from 'react';
import { ModalHandler } from '../../containers/ModalHandler';
import { Overlay } from '../../styles/shared';
import { AddSongWBody } from './styled';

export const AddSong: React.FC = () => {
  return (
    <ModalHandler>
      {renderProps => (
        <React.Fragment>
          <Overlay />
          <AddSongWBody>xd</AddSongWBody>
        </React.Fragment>
      )}
    </ModalHandler>
  );
};
