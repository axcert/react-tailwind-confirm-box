// src/useConfirm.ts
import { useState } from 'react';
import { ModalProps } from './ModalProps';

const useConfirm = () => {
  const [props, setProps] = useState<Omit<ModalProps, 'isOpen'> | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const requestConfirm = (modalProps: Omit<ModalProps, 'isOpen'>) => {
    setProps(modalProps);
    setIsOpen(true); // Internally manage the isOpen state
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Prepare the full modalProps including the internally managed isOpen state
  const fullModalProps = props ? { ...props, isOpen } : null;

  return { requestConfirm, props: fullModalProps, handleClose };
};

export default useConfirm;
