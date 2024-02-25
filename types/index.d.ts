// index.d.ts for your package

// First, ensure your ModalTheme enum is declared to match the runtime JS code.
export enum ModalTheme {
  DeleteConfirmation = "delete-confirmation",
  ActionConfirmation = "action-confirmation",
  CustomConfirmation = "custom-confirmation",
}

// Declare the interface for the props accepted by your ConfirmModal component.
export interface ModalProps {
  isOpen: boolean;
  theme?: ModalTheme; // Use the ModalTheme enum here
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

// If you have a hook, like useConfirm, declare its return type.
export interface UseConfirmReturn {
  showModal: (props: Omit<ModalProps, 'isOpen'>) => void; // Assuming 'isOpen' is internally managed and not required from the consumer
  ModalProps: ModalProps; // This might be adjusted based on actual implementation details
  handleClose: () => void;
}

// Declare the hook itself.
// Ensure the name matches what you've used in your implementation.
export declare function useConfirm(): UseConfirmReturn;

// If your ConfirmModal is a component, declare it accordingly.
// Adjust if it's a default or named export based on your actual code.
export declare const ConfirmModal: (props: ModalProps) => JSX.Element;
