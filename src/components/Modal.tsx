// src/Modal.tsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./ModalProps"; // This path should correctly point to where ModalProps.ts is located
import { ModalTheme } from "./themes"; // Same for this path pointing to themes.ts

const Modal: React.FC<ModalProps> = ({
  isOpen,
  theme = ModalTheme.ActionConfirmation, // Default theme
  title,
  description,
  onConfirm,
  onCancel,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  confirmButtonClasses = "",
  cancelButtonClasses = "",
  customContent,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [modalClass, setModalClass] = useState("ax-conf-modal-enter");

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setModalClass("ax-conf-modal-enter");
      setTimeout(() => setModalClass("ax-conf-modal-enter-active"), 10); // Start transition
    } else {
      setModalClass("ax-conf-modal-exit");
      setTimeout(() => setModalClass("ax-conf-modal-exit-active"), 10); // Start transition
      setTimeout(() => setShowModal(false), 300); // Wait for transition to finish
    }
  }, [isOpen]);

  if (!showModal) return null;

  // Modal content based on theme
  const getContent = () => {
    switch (theme) {
      case ModalTheme.DeleteConfirmation:
        return (
          <>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <Buttons
              confClasses={` inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto ${confirmButtonClasses}`}
              cancelClasses={` mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto ${cancelButtonClasses}`}
            />
          </>
        );
      case ModalTheme.ActionConfirmation:
        return (
          <>
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
            <p>{description}</p>
            <Buttons
              confClasses={` inline-flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 sm:ml-3 sm:w-auto ${confirmButtonClasses}`}
              cancelClasses={` mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto ${cancelButtonClasses}`}
            />
          </>
        );
      case ModalTheme.CustomConfirmation:
        return (
          <>
            {customContent || null}{" "}
            <Buttons
              confClasses={` inline-flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 sm:ml-3 sm:w-auto ${confirmButtonClasses}`}
              cancelClasses={` mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto ${cancelButtonClasses}`}
            />
          </>
        );
      default:
        return null;
    }
  };

  function Buttons({confClasses,cancelClasses}:any) {
    return (
      <>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button className={confClasses} onClick={onConfirm}>
            {confirmButtonText}
          </button>
          <button
            className={cancelClasses}
            onClick={onCancel}
          >
            {cancelButtonText}
          </button>
        </div>
      </>
    );
  }

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${modalClass}`}
    >
      <div
        className={`bg-white p-4 rounded-lg shadow-lg max-w-md w-full ${modalClass}`}
      >
        {getContent()}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
