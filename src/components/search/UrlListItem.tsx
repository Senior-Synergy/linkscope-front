import Link from "next/link";
import React from "react";

interface UrlListItemProps {
  url: string;
  date: Date;
  isSafe: boolean;
}

function UrlListItem({ url, date, isSafe }: UrlListItemProps) {
  const id = 1;

  return (
    <Link href={`/result/${id}`}>
      <div className="flex items-center justify-between gap-2 p-4 hover:bg-gray-200">
        <p className="truncate">{url}</p>
        <div className="flex items-center gap-4">
          <div className="w-20 hidden sm:block">
            <p>{date.toLocaleDateString()}</p>
          </div>

          <div
            className={`w-20 text-center p-1 rounded ${
              isSafe ? "bg-green-400" : "bg-red-400"
            }`}
          >
            <p className="text-white text-sm">{isSafe ? "SAFE" : "UNSAFE"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UrlListItem;
