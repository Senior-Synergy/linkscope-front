"use client";

import React, { useEffect, useRef } from "react";
import Portal from "./Portal";

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function ModalWrapper({ isOpen, onClose, children }: ReusableModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <Portal>
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-300 bg-opacity-50 backdrop-blur-sm transition-all
                  ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div
          ref={modalRef}
          className="bg-white p-4 rounded-lg max-w-screen-lg w-full overflow-y-auto m-8"
        >
          {children}
          {/* <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            Close
          </button> */}
        </div>
      </div>
    </Portal>
  );
}

export default ModalWrapper;
