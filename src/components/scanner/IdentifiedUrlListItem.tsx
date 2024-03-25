import React from "react";
import { FaCheck } from "react-icons/fa6";

interface IdentifiedUrlListItemProps {
  onClick: () => void;
  isSelected: boolean;
  url: string;
}

function IdentifiedUrlListItem({
  url,
  isSelected,
  onClick,
}: IdentifiedUrlListItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-between 
            w-full h-12 gap-2 p-4
            rounded-lg border
            ${isSelected ? "bg-primary-50 border-primary" : "bg-white"}`}
    >
      <div className={`${!isSelected && ""} truncate`}>{url}</div>
      <div
        className={`flex items-center justify-center rounded w-5 h-5 border ${
          isSelected ? "border-primary bg-primary" : "bg-white"
        }`}
      >
        {isSelected && <FaCheck className="w-3 h-3 fill-white" />}
      </div>
    </button>
  );
}

export default IdentifiedUrlListItem;
