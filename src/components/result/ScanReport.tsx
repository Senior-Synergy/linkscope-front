import { ScanResult } from "@/types/resultTypes";
import Link from "next/link";

interface ScanReportProps {
  index: number;
  result: ScanResult;
}

function ScanReport({ index, result }: ScanReportProps) {
  return (
    <div
      id={`result-${index}`}
      key={index}
      className="flex flex-col gap-4 p-4 border rounded-xl"
    >
      <div
        className={`flex flex-col w-full min-h-28 justify-between items-center gap-4 p-4 rounded-lg shadow ${
          result.modelResults.verdict === 1 ? "bg-gradient-to-b from-green-400 to-green-600" : "bg-amber-500"
        }`}
      >
        <h2 className="text-2xl text-white">
          Model Results:
          <span className="font-bold">
            {" "}
            {result.modelResults.verdict === 1 ? "SAFE" : "UNSAFE"}
          </span>
        </h2>
        <div className="text-center text-white">
          <h3 className="font-bold text-xl">{result.urlDetails.actualUrl}</h3>
          <p className="font-light">
            This URL is classified as
            <span className="font-bold">
              {" "}
              {result.modelResults.verdict === 1 ? "safe" : "unsafe"}.
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col p-2 gap-2 border rounded-lg bg-gray-50">
        <p className="font-bold mb-1">Extracted Features</p>
        <div className="flex justify-center gap-2">
          <div className="flex items-center gap-4 bg-white border p-4 rounded-lg w-1/2">
            <div>
              <p className="font-medium">Feature name</p>
              <p className="font-light">Secondary factor</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white border p-4 rounded-lg w-1/2">
            <div>
              <p className="font-medium">Feature name</p>
              <p className="font-light">Secondary factor</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
      <h3 className="text-lg font-bold mb-1">Explore</h3>
      <p className="text-gray-600 mb-2">
        Nulla fringilla metus ut purus blandit accumsan.
      </p>
      <div className="flex flex-col p-2 gap-2 border rounded-lg bg-gray-50">
        {result.relatedUrl.map((relatedUrl, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 gap-2
                        rounded-lg border bg-white"
          >
            <p className="truncate">{relatedUrl}</p>
          </div>
        ))}
      </div>
    </div> */}

      {/* Buttons */}
      <div className="flex items-center justify-end w-full space-x-4">
        <Link
          target="_blank"
          href={"https://www.google.com"}
          className={`flex items-center justify-center 
              w-1/2 h-12 rounded-lg 
              border
              transition-all ${
                true
                  ? "border-primary text-primary hover:bg-primary-dark hover:border-primary-dark hover:text-white"
                  : "pointer-events-none text-deactive border-deactive"
              }`}
        >
          Visit site
        </Link>

        <button
          className={`flex items-center justify-center 
              w-1/2 h-12 rounded-lg 
              text-white 
              transition-all ${
                true
                  ? "bg-primary hover:bg-primary-dark"
                  : "pointer-events-none bg-deactive"
              }`}
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default ScanReport;
