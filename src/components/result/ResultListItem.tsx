"use client";

import { Result } from "@/types/urlTypes";
import { calculateVerdict } from "@/utils/formattor";
import Link from "next/link";
import VerdictDisplay from "./VerdictDisplay";
import CountryFlag from "../common/CountryFlag";

interface ResultListItemProps {
  result: Result;
}

function ResultListItem({ result }: ResultListItemProps) {
  const verdict = result.hasSoup
    ? calculateVerdict(result.phishProb)
    : "UNKNOWN";

  return (
    <Link href={`/result/${result.resultId}`}>
      <div className="flex items-center justify-between gap-4 p-4 hover:bg-gray-200 hover:dark:bg-gray-800 transition-colors h-20">
        <div className="grow truncate">
          <p className="truncate"> {result.submittedUrl}</p>

          <p className="truncate text-sm text-gray-500">
            <strong>Redirected to:</strong> {result.url.finalUrl}
          </p>
        </div>

        {result.url && (
          <div className="hidden sm:flex items-center justify-center w-10 shrink-0 ">
            <CountryFlag country={result.url.country} />
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="w-20 text-sm text-center hidden sm:block">
            <p>{result.datetimeCreated.toLocaleDateString()}</p>
            <p>{result.datetimeCreated.toLocaleTimeString()}</p>
          </div>

          <VerdictDisplay verdict={verdict} hideHint/>
        </div>
      </div>
    </Link>
  );
}

export default ResultListItem;
