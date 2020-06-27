import React from 'react';
import { useState } from 'react';

export interface ModalRenderProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export interface Props {
  defaultOpen?: boolean;
  children(renderProps: ModalRenderProps): React.ReactElement | null;
}

export const ModalHandler: React.FC<Props> = ({ children: renderFn, defaultOpen }) => {
  const [isOpen, setOpen] = useState(!!defaultOpen);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  return renderFn({
    isOpen,
    openModal,
    closeModal,
  });
};
