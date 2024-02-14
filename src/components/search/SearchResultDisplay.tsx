import { SearchResult, Verdict } from "@/types/searchTypes";
import React from "react";

interface SearchResultDisplayProps {
  searchResults: SearchResult[];
}

function SearchResultDisplay({ searchResults }: SearchResultDisplayProps) {
  return (
    <div
      className="flex flex-col gap-2
                w-full p-2
                rounded-xl border bg-gray-100"
    >
      {searchResults.map((result, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 gap-2
                    rounded-lg border bg-white"
        >
          <p className="truncate">{result.url}</p>
          <div className="flex items-center gap-4">
            <p className="hidden md:block">{result.date.toDateString()}</p>
            <div
              className={`text-white text-center font-medium w-16 p-1 rounded ${
                result.verdict === Verdict.SAFE ? "bg-green-400" : "bg-red-400"
              }`}
            >
              {result.verdict}
            </div>
            <div
              className={`border border-deactive text-center font-medium w-8 h-8 p-1 rounded-full`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResultDisplay;
