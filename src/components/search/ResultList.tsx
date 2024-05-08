"use client";

import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

import { FaQuestionCircle } from "react-icons/fa";

import { Result } from "@/types/urlTypes";

interface ResultListProps {
  results: Result[];
}

function ResultList({ results }: ResultListProps) {
  const verdictMappings: Record<string, { label: string; color: string }> = {
    UNKNOWN: { label: "Unknown", color: "bg-gray-500" },
    VERY_LOW: { label: "Safe", color: "bg-lime-500" },
    LOW: { label: "Safe", color: "bg-lime-500" },
    MEDIUM: { label: "Moderate", color: "bg-amber-500" },
    HIGH: { label: "Suspecious", color: "bg-orange-500" },
    VERY_HIGH: { label: "Malicious", color: "bg-red-500" },
    //-------------------------------------------------------------------
    unknown: { label: "Unknown", color: "bg-gray-500" },
    safe: { label: "Safe", color: "bg-status-success" },
    suspicious: { label: "Suspicious", color: "bg-status-caution" },
    malicious: { label: "Malicious", color: "bg-status-warning" },
  };

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
                  <div className="flex items-center justify-between gap-4 p-4 hover:bg-gray-200 h-20">
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
                                  ${
                                    result.verdict &&
                                    result.verdict in verdictMappings
                                      ? verdictMappings[result.verdict].color
                                      : "bg-black"
                                  }
                                  `}
                      >
                        <p className="text-white text-sm font-normal">
                          {result.verdict && result.verdict in verdictMappings
                            ? verdictMappings[result.verdict].label
                            : result.verdict}
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
            The result you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </div>
      )}
    </div>
  );
}

export default ResultList;
