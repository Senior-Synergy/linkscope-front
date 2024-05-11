import React from "react";
import { FaCircleQuestion } from "react-icons/fa6";

interface InfoBoxProps {
  title: string;
  value: any;
  hint?: string;
}

function InfoBox({ title, value, hint }: InfoBoxProps) {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 rounded-t-lg bg-gray-100 dark:bg-gray-900 border ">
        <p className="font-semibold">{title}</p>

        {hint && (
          <div className="group/item relative">
            <FaCircleQuestion className="cursor-pointer" />
            <div className="absolute right-0 bottom-6 p-4 w-52 md:w-80 rounded-lg shadow-lg opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity bg-white dark:bg-black border">
              {hint}
            </div>
          </div>
        )}
      </div>
      <div className="text-3xl text-center p-8 border border-t-0 rounded-b-lg">
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}

export default InfoBox;
