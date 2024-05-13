import { verdictMappings } from "@/constants/result";
import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";

interface VerdictDisplayProps {
  verdict: string;
  hideHint?: boolean;
}

function VerdictDisplay({ hideHint, verdict }: VerdictDisplayProps) {
  // fallback color for "bg-color" so that a tailwind class is generated
  // const colorClass = color || "bg-gray-500";
  const color = verdictMappings[verdict]?.color ?? "bg-gray-500";
  const label = verdictMappings[verdict]?.label ?? "Unavailable";

  return (
    <div
      className={`flex items-center justify-center py-2 text-center p-1 rounded-full
                ${hideHint ? "w-24" : "w-28"}
                ${color == "GREEN" && "bg-lime-600"}
                ${color == "GREENLIGHT" && "bg-lime-500"}
                ${color == "YELLOW" && "bg-yellow-500"}
                ${color == "ORANGE" && "bg-orange-500"}
                ${color == "RED" && "bg-red-500"}
                ${color == "GRAY" && "bg-gray-500"}`}
    >
      <p className="text-white text-sm font-normal">{label}</p>
      {verdict == "UNKNOWN" && !hideHint && (
        <div className="group/item relative">
          <FaCircleQuestion className="cursor-pointer ml-1" />
          <div className="absolute left-0 top-6 p-4 w-52 md:w-80 rounded-lg shadow-lg opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity bg-white dark:bg-black border">
            Crucial information cannot be extracted from the given URL.
          </div>
        </div>
      )}
    </div>
  );
}

export default VerdictDisplay;
