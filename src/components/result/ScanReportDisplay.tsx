"use client";

import { ScanResult } from "@/types/resultTypes";
import ScanReport from "./ScanReport";

interface ScanReportDisplayProps {
  results: ScanResult[];
}

function ScanReportDisplay({ results }: ScanReportDisplayProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Summarized Report</h2>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Detailed Report</h2>
        <p className="text-gray-600 mb-8">Description to be added.</p>

        <div className="space-y-8">
          {results.map((result, index) => (
            <ScanReport result={result} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScanReportDisplay;
