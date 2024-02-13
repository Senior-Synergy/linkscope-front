"use client";

import React, { useEffect } from "react";
import Portal from "./Portal";

interface ReusableModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-300 bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white p-4 rounded-lg max-w-screen-lg w-full overflow-y-auto m-8">
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
};

export default ReusableModal;
