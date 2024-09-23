"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface PaginatorProps {
  pageSize: number;
  totalCount: number;
}

function Paginator({ totalCount, pageSize }: PaginatorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const maxPage = totalCount == 0 ? 1 : Math.ceil(totalCount / pageSize);
  const currentPage = parseInt(searchParams.get("page") ?? "1");

  const createQueryString = useCallback(
    (name: string, value: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value.toString());

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        disabled={currentPage == 1}
        className={`flex justify-center items-center h-12 w-12 rounded-l-lg border transition-colors 
                  ${
                    currentPage == 1
                      ? "bg-gray-200 dark:bg-gray-900 text-gray-300 dark:text-gray-700"
                      : "bg-primary hover:bg-primary-600 text-white"
                  }`}
        onClick={() => {
          router.push(
            pathname + "?" + createQueryString("page", currentPage - 1)
          );
        }}
      >
        <FaChevronLeft />
      </button>
      <div className="flex items-center px-4 h-12 border border-x-0 bg-gray-50 dark:bg-gray-950">
        {currentPage} / {maxPage}
      </div>
      <button
        disabled={currentPage == maxPage}
        className={`flex justify-center items-center h-12 w-12 rounded-r-lg border transition-colors 
                  ${
                    currentPage == maxPage
                      ? "bg-gray-200 dark:bg-gray-900 text-gray-300 dark:text-gray-700"
                      : "bg-primary hover:bg-primary-600 text-white"
                  }`}
        onClick={() => {
          // <pathname>?sort=asc
          router.push(
            pathname + "?" + createQueryString("page", currentPage + 1)
          );
        }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Paginator;
