import React from "react";

interface UrlGridFallbackProps {
  pageSize: number;
}

function UrlGridFallback({ pageSize }: UrlGridFallbackProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {Array(pageSize)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 p-4 h-20 min-w-72 min-h-36 border rounded-lg"
          >
            <div className="flex flex-col">
              <div className="h-4 w-56 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
              <div className="h-4 w-32 mt-2 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
    </section>
  );
}

export default UrlGridFallback;
