import { verdictMappings } from "@/constants/result";
import React from "react";

interface VerdictDisplayProps {
  verdict: string;
}

function VerdictDisplay({ verdict }: VerdictDisplayProps) {
  // fallback color for "bg-color" so that a tailwind class is generated
  // const colorClass = color || "bg-gray-500";
  const color = verdictMappings[verdict]?.color ?? "bg-gray-500";
  const label = verdictMappings[verdict]?.label ?? "Unavailable";

  return (
    <div
      className={`w-24 py-2 text-center p-1 rounded-full
                ${color == "GREEN" && "bg-lime-600"}
                ${color == "GREENLIGHT" && "bg-lime-500"}
                ${color == "YELLOW" && "bg-yellow-500"}
                ${color == "ORANGE" && "bg-orange-500"}
                ${color == "RED" && "bg-red-500"}`}
    >
      <p className="text-white text-sm font-normal">{label}</p>
    </div>
  );
}

export default VerdictDisplay;
