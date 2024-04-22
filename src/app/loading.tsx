import React from "react";
import { FaSpinner } from "react-icons/fa6";

function loading() {
  return (
    <div className="m-auto">
      <FaSpinner className="fill-black w-12 h-12 animate-spin"/>
    </div>
  );
}

export default loading;
