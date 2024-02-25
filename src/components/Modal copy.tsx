// src/Modal.tsx
import React from "react";
import ReactDOM from "react-dom";
import { ModalProps } from './ModalProps'; // This path should correctly point to where ModalProps.ts is located
import { ModalTheme } from './themes'; // Same for this path pointing to themes.ts

const Modal: React.FC<ModalProps> = ({
  isOpen,
  theme = ModalTheme.ActionConfirmation, // Default theme
  title,
  description,
  onConfirm,
  onCancel,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  customContent,
}) => {
  if (!isOpen) return null;

  // Modal content based on theme
  const getContent = () => {
    switch (theme) {
      case ModalTheme.DeleteConfirmation:
        return (
          <>
            <h2 className="text-lg font-bold text-red-600">{title}</h2>
            <p className="text-red-500">{description}</p>
          </>
        );
      case ModalTheme.ActionConfirmation:
        return (
          <>
            <h2 className="text-lg font-bold text-blue-600">{title}</h2>
            <p>{description}</p>
          </>
        );
      case ModalTheme.CustomConfirmation:
        return customContent || null;
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        {getContent()}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onConfirm}
          >
            {confirmButtonText}
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={onCancel}
          >
            {cancelButtonText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
