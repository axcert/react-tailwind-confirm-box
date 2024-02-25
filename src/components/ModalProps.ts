// src/ModalProps.ts
import { ReactNode } from "react";
import { ModalTheme } from "./themes"; // Make sure this path matches the location of your themes.ts file

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
