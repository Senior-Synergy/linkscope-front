"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import VerdictDisplay from "./VerdictDisplay";
import CountryFlag from "../common/CountryFlag";
import { Result } from "@/types/urlTypes";

interface ResultListItemProps {
  result: Result;
}

function ResultListItem({ result }: ResultListItemProps) {
  const t = useTranslations("Result");

  return (
    <Link href={`/result/${result.resultId}`}>
      <div className="flex items-center justify-between gap-4 p-4 hover:bg-gray-100 hover:dark:bg-gray-900 transition-colors h-20">
        <div className="grow truncate">
          <p className="truncate"> {result.submittedUrl}</p>

          <p className="truncate text-sm text-gray-500">
            <strong>{t("redirected-to")}:</strong> {result.url.finalUrl}
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

          <VerdictDisplay
            phishProb={result.phishProb}
            hasSoup={result.hasSoup ?? false}
            hideHint
          />
        </div>
      </div>
    </Link>
  );
}

export default ResultListItem;
