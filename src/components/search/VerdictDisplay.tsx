import { verdictMappings } from "@/constants/result";
import React from "react";

interface VerdictDisplayProps {
  label: string;
  color: string;
}

function VerdictDisplay({ label, color }: VerdictDisplayProps) {
  // fallback color for "bg-color" so that a tailwind class is generated
  const colorClass = color || "bg-gray-500";
  return (
    <div className={`w-24 py-2 text-center p-1 rounded-full ${colorClass}`}>
      <p className="text-white text-sm font-normal">{label}</p>
    </div>
  );
}

export default VerdictDisplay;
