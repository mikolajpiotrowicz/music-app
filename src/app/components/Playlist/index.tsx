import React from 'react';
import { ModalHandler } from '../../containers/ModalHandler';
import { PlaylistWrapper, PlaylistTrigger, PlaylistToolbar, PlaylistActionButton, PlaylistSearchInput } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons';

export const Playlist: React.FC = () => {
  return (
    <ModalHandler>
      {renderProps => (
        <React.Fragment>
          <PlaylistTrigger onClick={() => renderProps.isOpen ? renderProps.closeModal() : renderProps.openModal()}>
            <FontAwesomeIcon color="#DDD" size="2x" icon={faBars} />
          </PlaylistTrigger>
          <PlaylistWrapper {...renderProps}>
            <PlaylistToolbar>
              <PlaylistActionButton>
                <FontAwesomeIcon color="#DDD" size="lg" icon={faChevronLeft} />
              </PlaylistActionButton>
              <PlaylistActionButton>
                <FontAwesomeIcon color="#DDD" size="lg" icon={faChevronRight} />
              </PlaylistActionButton>
              <PlaylistSearchInput />
            </PlaylistToolbar>
          </PlaylistWrapper>
        </React.Fragment>
      )}
    </ModalHandler>
  );
};
