import Link from "next/link";
import React from "react";

interface UrlListItemProps {
  url: string;
  date: Date;
  isSafe: boolean;
}

function UrlListItem({ url, date, isSafe }: UrlListItemProps) {
  return (
    <Link
      href={"/scan"}
      className="flex items-center justify-between p-4 gap-2 hover:bg-gray-200 transition-colors"
    >
      <p className="truncate">{url}</p>
      <div className="flex items-center gap-4">
        <p className="hidden md:block">{date.toDateString()}</p>
        <div
          className={`text-white text-center text-sm font-medium w-20 p-1 rounded ${
            isSafe ? "bg-green-400" : "bg-red-400"
          }`}
        >
          {isSafe ? "SAFE" : "UNSAFE"}
        </div>
      </div>
    </Link>
  );
}

export default UrlListItem;
