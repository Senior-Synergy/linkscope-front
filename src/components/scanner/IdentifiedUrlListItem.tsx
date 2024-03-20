import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaEye, FaMinus, FaPlus, FaRegEye } from "react-icons/fa6";

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
    <div
      className={`flex items-center justify-between 
            w-full gap-2 p-2 
            rounded-lg border
            transition-colors ${
              isSelected ? "bg-white" : "bg-gray-300 line-through"
            }`}
    >
      <div className={`${!isSelected && ""} truncate pl-2`}>{url}</div>
      <button
        onClick={onClick}
        className="rounded-full p-1 hover:bg-gray-200"
      >
        {isSelected ? (
          <FaMinus className="w-4 h-4" />
        ) : (
          <FaPlus className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

export default IdentifiedUrlListItem;
