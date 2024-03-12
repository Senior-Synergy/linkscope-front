import React from "react";
import ResultChart from "./ResultChart";

import { ScanResult } from "@/types/resultTypes";

interface SummarizedReportProps {
  results: ScanResult[];
}

function SummarizedReport({ results }: SummarizedReportProps) {
  const phishCount = results.filter(
    (result) => result.modelResults.verdict === 0
  ).length;

  const safeCount = results.filter(
    (result) => result.modelResults.verdict === 1
  ).length;

  const summarizedReportItems = [
    {
      title: "Total URL Scanned",
      value: results.length,
    },
    {
      title: "Safe URL",
      value: safeCount,
    },
    {
      title: "Potential Phishing URL",
      value: phishCount,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-4 gap-4 rounded-xl">
      <div className="flex flex-auto h-52 border overflow-x-auto rounded-xl">
        <table className="w-full h-full">
          <tbody className="divide-y">
            {summarizedReportItems.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 font-medium bg-gray-100">
                  {item.title}
                </td>
                <td className="px-4 py-2 font-medium bg-gray-white text-center">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 h-52 w-52">
        <ResultChart phishCount={phishCount} safeCount={safeCount} />
      </div>
    </div>
  );
}

export default SummarizedReport;
