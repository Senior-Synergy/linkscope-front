import { Result, ResultExtended } from "@/types/urlTypes";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";
import TextCopyWrapper from "../common/wrapper/TextCopyWrapper";

interface DetailedUrlList {
  results: Result[];
}

function DetailedUrlList({ results }: DetailedUrlList) {
  return (
    <div
      className="flex flex-col
          w-full 
          rounded-xl bg-white border
          divide-y divide
          overflow-hidden"
    >
      {results.map((result, index) => (
        <div key={index} className="flex flex-col p-4 gap-4">
          <div className="flex items-center justify-between gap-12">
            <div className="truncate">
              <p className="truncate text-lg font-semibold mb-1">
                {result.submittedUrl}
              </p>
              <p className="truncate text-sm text-gray-600">
                <span className="font-medium">Redirected to: </span>
                {result.url?.finalUrl}
              </p>
            </div>

            <div className="flex gap-2 shrink-0">
              <TextCopyWrapper text={result.submittedUrl}>
                <div className="flex items-center gap-2 p-2 border rounded-lg bg-white hover:bg-gray-200 transition-all">
                  <p className="text-sm">Copy URL</p>
                  <FaCopy className="w-5 h-5 fill-gray-400 shrink-0" />
                </div>
              </TextCopyWrapper>
              <Link href={`/url/${result.urlId}`}>
                <button className="flex items-center gap-2 p-2 border rounded-lg bg-white hover:bg-gray-200 transition-all">
                  <p className="text-sm">More Details</p>
                  <FaChevronCircleRight className="w-5 h-5 fill-gray-400 shrink-0" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailedUrlList;
