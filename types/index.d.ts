// index.d.ts

import { ReactNode } from "react";

export enum ModalTheme {
  DeleteConfirmation = "delete-confirmation",
  ActionConfirmation = "action-confirmation",
  CustomConfirmation = "custom-confirmation",
}

export interface ModalProps {
  isOpen: boolean;
  theme?: ModalTheme;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
  customContent?: ReactNode; // For CustomConfirmation theme
  confirmButtonClasses?:string,
  cancelButtonClasses?:string,
}

export declare function useConfirm(): {
  showModal: (props: ModalProps) => void;
  ModalProps: ModalProps;
  handleClose: () => void;
};

export declare const ConfirmModal: (props: ModalProps) => JSX.Element;
