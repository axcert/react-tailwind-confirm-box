# React Tailwind Confirm Box By Axcertro

React Tailwind Confirm Box is a sleek, easy-to-use modal component built with React, TypeScript, and TailwindCSS, designed to deliver beautiful transitions and a seamless user experience. It's fully customizable, allowing for a variety of themes including Delete Confirmation, Action Confirmation, and Custom Confirmation. Whether you're looking to enhance the user interface of your web application with dynamic, responsive modals, or need a reliable solution for confirmations, React Tailwind Confirm Box has you covered.

## Features

- **Dynamic Themes**: Choose from pre-defined themes or create your own for a personalized look and feel.
- **Smooth Transitions**: Leverages CSS transitions for a smooth, professional user experience.
- **Fully Customizable**: Tailor every aspect of your modal to fit the design of your application.
- **Built with React & TypeScript**: Enjoy the robustness of TypeScript and the flexibility of React.
- **TailwindCSS Integration**: Utilize TailwindCSS for easy and efficient styling.

## Installation

Install React Tailwind Confirm Box with npm:

```bash
npm install react-tailwind-confirm-box
```

Or with yarn:

```bash
yarn add react-tailwind-confirm-box
```

## Usage

Here's a quick example to get you started:

```jsx
import React, { useState } from "react";
import { ConfirmModal, useConfirm } from "react-tailwind-confirm-box";

const App = () => {
  const { showModal, ModalProps, handleClose } = useConfirm();

  return (
    <div className="p-4 bg-teal-800">
      <h2 className="font-[300] text-xl text-white mb-4">The Delete Button</h2>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          requestConfirm({
            theme: ModalTheme.DeleteConfirmation,
            title: "Delete Item",
            description:
              "Are you sure you want to delete this item? This action cannot be undone.",
            onConfirm: () => {
              //  Your function here
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
  );
};

export default App;
```

<!-- ## Documentation

For more detailed documentation, including a full list of props and theme customization options, visit our [documentation page](<Documentation URL>). -->

## Contributing

We welcome contributions to React Tailwind Confirm Box! If you have suggestions or encounter issues, please feel free to open an issue or submit a pull request.

## About Us

React Tailwind Confirm Box is developed and maintained by [**Axcertro LLC**](https://axcertro.com), a leader in innovative web solutions. Our team is dedicated to creating high-quality, open-source tools and libraries to support the developer community. Learn more about our work and services at [our website](https://axcertro.com).

## License

React Tailwind Confirm Box is available under the MIT license. See the LICENSE file for more info.