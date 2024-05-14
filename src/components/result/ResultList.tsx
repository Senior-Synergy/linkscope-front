import { FaQuestionCircle } from "react-icons/fa";

import { Result } from "@/types/urlTypes";
import ResultListItem from "./ResultListItem";
import { useTranslations } from "next-intl";

interface ResultListProps {
  results: Result[];
}

function ResultList({ results }: ResultListProps) {
  const t_common = useTranslations("Common");
  const t = useTranslations("Result.no-result-found");

  return (
    <div>
      {results.length > 0 ? (
        <div>
          <div className="flex justify-between border border-b-0 rounded-t-lg px-4 py-2 bg-gray-100 dark:bg-gray-900 font-semibold">
            <p>{t_common("result")}</p>

            <div className="flex gap-4 text-center">
              <p className="hidden sm:block w-20">{t_common("date")}</p>
              <p className="w-24">{t_common("status")}</p>
            </div>
          </div>

          <div className="border rounded-b-lg overflow-hidden">
            <div
              className="flex flex-col
                  w-full divide-y divide"
            >
              {results.map((result, index) => (
                <ResultListItem key={index} result={result} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 p-4 min-h-96 m-auto border rounded-lg">
          <FaQuestionCircle className="w-32 h-32" />
          <h2 className="text-4xl font-bold text-center">{t("title")}</h2>
          <p className="text-gray-500 max-w-lg text-center">{t("desc")}</p>
        </div>
      )}
    </div>
  );
}

export default ResultList;
