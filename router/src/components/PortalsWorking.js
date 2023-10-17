import { useState } from "react";
import React from "react";
import Modal from "./Modal";
import ReactDOM from "react-dom";

export default function PortalsWorking() {
  const [isOpen, setIsOpen] = useState(false);
  return ReactDOM.createPortal(
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Creating a popup using Portals
        </Modal>
      </div>
    </>,
    document.getElementById("portal")
  );
}
