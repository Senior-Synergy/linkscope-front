import React from "react";

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
            w-full gap-2 p-2 
            rounded-lg border
            transition-colors ${
              isSelected
                ? "bg-white hover:bg-gray-200"
                : "bg-gray-300 line-through "
            }`}
    >
      <div className={`${!isSelected && ""} truncate pl-2`}>{url}</div>
      <div
        className="flex flex-shrink-0 items-center justify-center 
              w-8 h-8 rounded-full
              bg-white
              font-bold
              transition-all"
      ></div>
    </button>
  );
}

export default IdentifiedUrlListItem;
