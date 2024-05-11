import React from "react";
import { FaSpinner } from "react-icons/fa6";

function loading() {
  return (
    <div className="m-auto">
      <div className="flex flex-col items-center">
        <FaSpinner className="fill-black w-12 h-12 animate-spin" />
        <p className="text-lg mt-4">Loading URL Information...</p>
      </div>
    </div>
  );
}

export default loading;
