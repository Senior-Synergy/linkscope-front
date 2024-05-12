import React from "react";
import { FaCheck } from "react-icons/fa6";

interface IdentifiedUrlListItemProps {
  onClick: () => void;
  isSelected: boolean;
  isDisabled: boolean;
  url: string;
}

function IdentifiedUrlListItem({
  url,
  isSelected,
  isDisabled,
  onClick,
}: IdentifiedUrlListItemProps) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled && !isSelected}
      className={`flex items-center justify-between 
            w-full h-12 gap-2 p-4
            rounded-lg border
            transition-all
            ${
              isSelected
                ? "bg-primary-50 dark:bg-primary-950 border-primary"
                : isDisabled
                ? "bg-gray-50 dark:bg-gray-950 text-gray-400 dark:text-gray-600"
                : "bg-white dark:bg-black"
            }`}
    >
      <div className={`${!isSelected && ""} truncate`}>{url}</div>
      <div
        className={`flex items-center justify-center 
                  w-5 h-5 
                  border rounded ${
                    isSelected ? "border-primary bg-primary" : "bg-transparent"
                  }`}
      >
        {isSelected && <FaCheck className="w-3 h-3 fill-white" />}
      </div>
    </button>
  );
}

export default IdentifiedUrlListItem;
