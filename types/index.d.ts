// index.d.ts

export interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

export declare function useConfirm(): {
  showModal: (props: ModalProps) => void;
  ModalProps: ModalProps;
  handleClose: () => void;
};

export declare const ConfirmModal: (props: ModalProps) => JSX.Element;
