// src/App.tsx
import { ModalTheme } from "./components/themes";
import useConfirm from "./components/useConfirm";
import Modal from "./components/Modal";
const App = () => {
  const { requestConfirm, props, handleClose } = useConfirm();

  return (
    <main className="w-full h-[100vh] bg-gray-700">
      <div className="p-4 container mx-auto flex justify-center h-full ">
        <div className="self-center text-center">
          <div className="p-4 bg-teal-800">
            <h2 className="font-[300] text-xl text-white mb-4">
              The Delete Button
            </h2>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                requestConfirm({
                  theme: ModalTheme.DeleteConfirmation,
                  title: "Delete Item",
                  description:
                    "Are you sure you want to delete this item? This action cannot be undone.",
                  onConfirm: () => {
                    console.log("Item deleted.");
                    handleClose();
                  },
                  onCancel: handleClose,
                  confirmButtonText: "Delete",
                  cancelButtonText: "Cancel",
                })
              }
            >
              Delete Item
            </button>
          </div>
          {/* Actino */}
          <div className="p-4 bg-teal-700">
            <h2 className="font-[600] text-2xl text-white mb-4">
              Action Confirmation Button
            </h2>
            <button
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                requestConfirm({
                  theme: ModalTheme.ActionConfirmation,
                  title: "Are you sure?",
                  description:
                    "Do you want to approve this action? This action cannot be undone.",
                  onConfirm: () => {
                    console.log("It's approved.");
                    handleClose();
                  },
                  onCancel: handleClose,
                  confirmButtonText: "Yes, Please",
                  cancelButtonText: "No",
                })
              }
            >
              Approve It
            </button>
          </div>
          {/* Custom */}
          <div className="p-4 bg-teal-600">
            <h2 className="font-[600] text-2xl text-white mb-4">
              Custom Action Button
            </h2>
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
              onClick={() =>
                requestConfirm({
                  theme: ModalTheme.CustomConfirmation,
                  title: "Are you sure?",
                  description:
                    "Do you want to approve this custom action? This action cannot be undone.",
                  onConfirm: () => {
                    console.log("It's approved.");
                    handleClose();
                  },
                  onCancel: handleClose,
                  confirmButtonText: "Mmm, yeah",
                  cancelButtonText: "No, Cancel",
                  customContent: (
                    <>
                      <h2 className="text-lg font-bold text-blue-600">Hello</h2>
                      <p>How Are you</p>
                    </>
                  ),
                })
              }
            >
              DO It
            </button>
          </div>
        </div>
        {props && <Modal {...props} />}
      </div>
    </main>
  );
};

export default App;
