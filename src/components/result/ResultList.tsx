import { FaQuestionCircle } from "react-icons/fa";

import { Result } from "@/types/urlTypes";
import ResultListItem from "./ResultListItem";

interface ResultListProps {
  results: Result[];
}

function ResultList({ results }: ResultListProps) {
  return (
    <div>
      {results.length > 0 ? (
        <div>
          <div className="flex justify-between border border-b-0 rounded-t-lg px-4 py-2 bg-gray-100 dark:bg-gray-900 font-semibold">
            <p>Result</p>

            <div className="flex gap-4 text-center">
              <p className="hidden sm:block w-20">Date</p>
              <p className="w-24">Status</p>
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
          <h2 className="text-4xl font-bold text-center">
            No results found...
          </h2>
          <p className="text-gray-500 max-w-lg text-center">
            The result you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </div>
      )}
    </div>
  );
}

export default ResultList;
