"use client";

import { useState } from "react";

import TabSelector from "../common/TabSelector";
import ManualScanner from "./ManualScanner";
import AutoScanner from "./AutoScanner";
import { createBulkSubmission } from "@/services/linkscopeApi";
import { useRouter } from "next/navigation";
import Portal from "../common/wrapper/Portal";
import { FaSpinner } from "react-icons/fa6";

function Scanner() {
  const router = useRouter();
  const [isScanning, setIsScanning] = useState(false);

  const scannerModeOptions = [
    { title: "Manual", value: 1 },
    { title: "Automatic", value: 0 },
  ];

  const [scannerMode, setScannerMode] = useState(1);

  function changeScannerMode(targetMode: number) {
    setScannerMode(targetMode);
  }

  async function submitUrls(urls: string[]) {
    setIsScanning(true);
    const response = await createBulkSubmission(urls);

    if (response) {
      router.push(`/scan/${response.submissionId}`);
    } else {
      // handle error...
      setIsScanning(false);
    }
  }

  return (
    <>
      <div
        className={`relative overflow-hidden 
        b         border p-4 rounded-lg 
                  ${isScanning && "pointer-events-none"}`}
      >
        <div className="h-10">
          <TabSelector
            currentItem={scannerMode}
            itemList={scannerModeOptions}
            onSelect={changeScannerMode}
          />
        </div>

        <div className="mt-4">
          <div className="grow">
            {scannerMode === 0 && <AutoScanner submitUrls={submitUrls} />}

            {scannerMode === 1 && <ManualScanner submitUrls={submitUrls} />}
          </div>
        </div>

        <div
          className={`absolute inset-0 
                    flex items-center justify-center 
                    bg-white backdrop-blur rounded-lg 
                    ${
                      isScanning
                        ? "opacity-100 bg-opacity-25"
                        : "opacity-0 bg-opacity-0 pointer-events-none"
                    } transition-opacity`}
        >
          <div className="flex flex-col items-center gap-4 max-w-xs">
            <FaSpinner
              className={`fill-black w-16 h-16 ${isScanning && "animate-spin"}`}
            />
            <p className="text-lg text-center">
              Please wait a moment while your request is being processed
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scanner;
