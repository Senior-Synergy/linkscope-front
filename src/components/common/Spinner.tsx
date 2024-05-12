import React from "react";
import { FaSpinner } from "react-icons/fa6";

interface SpinnerProps {
  description: string;
}

function Spinner({ description }: SpinnerProps) {
  return (
    <div className="m-auto">
      <div className="flex flex-col items-center">
        <FaSpinner className="w-12 h-12 animate-spin" />
        {description && <p className="text-lg mt-4">{description}</p>}
      </div>
    </div>
  );
}

export default Spinner;
