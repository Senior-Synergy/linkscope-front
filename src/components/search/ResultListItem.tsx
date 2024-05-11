"use client";

import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

import { Result } from "@/types/urlTypes";
import { verdictMappings } from "@/constants/result";
import { calculateVerdict } from "@/utils/formattor";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

interface ResultListItemProps {
  result: Result;
}

function ResultListItem({ result }: ResultListItemProps) {
  const verdict = result.hasSoup
    ? verdictMappings[calculateVerdict(result.phishProbMod)]
    : verdictMappings["UNKNOWN"];

  const color = verdict.color;
  const label = verdict.label;

  return (
    <Link href={`/result/${result.resultId}`}>
      <div className="flex items-center justify-between gap-4 p-4 hover:bg-gray-200 hover:dark:bg-gray-800 h-20">
        <div className="grow truncate">
          <p className="truncate">{result.submittedUrl}</p>
          <p className="truncate text-sm text-gray-500">
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

          <div className={`w-24 py-2 text-center p-1 rounded-full ${color}`}>
            <p className="text-sm font-normal text-white">{label}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ResultListItem;
