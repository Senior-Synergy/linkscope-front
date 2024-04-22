import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

import { FaQuestionCircle } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { Result } from "@/types/urlTypes";

interface ResultListProps {
  totalCount: number;
  currentPage: number;
  results: Result[];
  noPagination?: boolean;
}

function ResultList({
  results,
  totalCount,
  currentPage,
  noPagination,
}: ResultListProps) {
  const maxPage = totalCount == 0 ? 1 : Math.ceil(totalCount / 10);

  return (
    <div>
      {results.length > 0 ? (
        <div>
          <div className="flex justify-between border-t border-x rounded-t-lg px-4 py-2 bg-gray-100 text-gray-700 font-semibold">
            <p>URL Submission</p>

            <div className="flex gap-4 text-center">
              <p className="hidden sm:block w-20">Date</p>
              <p className="w-24">Status</p>
            </div>
          </div>

          <div className="border rounded-b-lg">
            <div
              className="flex flex-col
                  w-full divide-y divide"
            >
              {results.map((result, index) => (
                <Link key={index} href={`/result/${result.resultId}`}>
                  <div className="flex items-center justify-between gap-4 p-4 hover:bg-gray-200">
                    <div className="grow truncate">
                      <p className="truncate">{result.submittedUrl}</p>
                      <p className="truncate text-sm text-gray-500 ">
                        {result.url?.finalUrl}
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center justify-center w-10 shrink-0 ">
                      {result.url && result.url.country ? (
                        <ReactCountryFlag
                          style={{
                            width: "1.5em",
                            height: "1.5em",
                          }}
                          countryCode={result.url?.country}
                          svg
                        />
                      ) : (
                        <FaQuestionCircle className="text-lg" />
                      )}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-20 text-sm text-center hidden sm:block">
                        <p>{result.datetimeCreated.toLocaleDateString()}</p>
                        <p>{result.datetimeCreated.toLocaleTimeString()}</p>
                      </div>

                      <div
                        className={`w-24 py-2 text-center p-1 rounded-full
                        ${result.verdict == "unknown" && "bg-gray-500"}
                        ${result.verdict == "safe" && "bg-status-success"}
                        ${result.verdict == "suspicious" && "bg-status-caution"}
                        ${result.verdict == "malicious" && "bg-status-warning"}
                        `}
                      >
                        <p className="text-white text-sm font-normal">
                          {result.verdict}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 p-4 min-h-96 m-auto border rounded-lg">
          <FaQuestionCircle className="w-32 h-32" />
          <h2 className="text-4xl font-bold text-center">
            No results found...
          </h2>
          <p className="text-gray-600 max-w-lg  text-center">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </div>
      )}

      {!noPagination && (
        <div className="flex items-center justify-center mt-4 gap-4">
          <Link
            className={`${
              currentPage == 1 && "pointer-events-none text-gray-300"
            } `}
            href={{ pathname: "/search", query: { page: currentPage - 1 } }}
          >
            <FaChevronLeft />
          </Link>
          <div className="px-4 py-2 bg-gray-100 rounded-lg border">
            {currentPage} / {maxPage}
          </div>
          <Link
            className={`${
              currentPage == maxPage && "pointer-events-none text-gray-300"
            } `}
            href={{ pathname: "/search", query: { page: currentPage + 1 } }}
          >
            <FaChevronRight />
          </Link>
        </div>
      )}
    </div>
  );
}

export default ResultList;
