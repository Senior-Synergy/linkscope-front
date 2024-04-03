import { Result } from "@/types/urlTypes";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";
import TextCopyWrapper from "../common/TextCopyWrapper";

interface DetailedUrlList {
  results: Result[];
}

function DetailedUrlList({ results }: DetailedUrlList) {
  return (
    <div
      className="flex flex-col
          w-full 
          rounded-xl bg-gray-50 border
          divide-y divide
          overflow-hidden"
    >
      {results.map((result, index) => (
        <div key={index} className="flex flex-col p-4 gap-4">
          <div className="flex items-center justify-between gap-12">
            <div className="truncate">
              <p className="truncate text-lg font-semibold mb-1">
                {result.submitted_url}
              </p>
              <p className="truncate text-sm text-gray-600">
                <span className="font-medium">Final URL: </span>
                {result.url.final_url}
              </p>
            </div>

            <div className="flex gap-2 shrink-0">
              <TextCopyWrapper text={result.submitted_url}>
                <div className="flex items-center gap-2 p-2 border rounded-lg bg-white hover:bg-gray-200 transition-all">
                  <p className="text-sm">Copy URL</p>
                  <FaCopy className="w-5 h-5 fill-gray-400 shrink-0" />
                </div>
              </TextCopyWrapper>
              <Link href={`/url/${result.url_id}`}>
                <button className="flex items-center gap-2 p-2 border rounded-lg bg-white hover:bg-gray-200 transition-all">
                  <p className="text-sm">More Details</p>
                  <FaChevronCircleRight className="w-5 h-5 fill-gray-400 shrink-0" />
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-2 bg-gray-100 border rounded-lg">
            {/* <div className="flex items-center gap-2">
              <p className="w-32">Input</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(result.submitted_url);
                }}
                className="flex items-center justify-between grow p-2 bg-white hover:bg-gray-200 border rounded-md transition-colors"
              >
                <p className="truncate">{result.submitted_url}</p>
                <FaCopy className="w-4 h-4 fill-gray-400 shrink-0" />
              </button>
            </div> */}

            <div className="flex items-center gap-2">
              <p className="w-32">Classification</p>
              <div className="flex items-center justify-between grow p-2 border bg-gray-200 rounded-md transition-colors">
                <div
                  className={`text-white text-center text-sm font-medium w-20 p-1 rounded ${
                    !result.is_phishing ? "bg-green-400" : "bg-orange-400"
                  }`}
                >
                  {!result.is_phishing ? "SAFE" : "UNSAFE"}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-32">Probability</p>
              <div className="flex items-center justify-between grow p-2 border bg-gray-200 rounded-md transition-colors">
                <p className="truncate">{result.phish_prob}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="w-32">Date</p>
              <div className="flex items-center justify-between grow p-2 border bg-gray-200 rounded-md transition-colors">
                <p className="truncate">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailedUrlList;
