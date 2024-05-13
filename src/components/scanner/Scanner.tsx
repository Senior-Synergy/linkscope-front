"use client";

import { useState } from "react";

import TabSelector from "../common/TabSelector";
import ManualScanner from "./ManualScanner";
import AutoScanner from "./AutoScanner";
import { createBulkSubmission } from "@/services/linkscopeApi";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa6";
import ModalWrapper from "../common/wrapper/ModalWrapper";
import { FaExclamationTriangle } from "react-icons/fa";
import Button from "../common/Button";

function Scanner() {
  const router = useRouter();
  const [isScanning, setIsScanning] = useState(false);
  const [isWarning, setIsWarning] = useState(false);

  const [latestUrls, setLatestUrls] = useState<string[]>([]);

  const scannerModeOptions = [
    { title: "Manual", value: 1 },
    { title: "Automatic", value: 0 },
  ];

  const [scannerMode, setScannerMode] = useState(1);

  function changeScannerMode(targetMode: number) {
    setScannerMode(targetMode);
  }

  async function submitUrls(urls: string[]) {
    setLatestUrls(urls);
    setIsScanning(true);

    try {
      console.log("started");
      const response = await createBulkSubmission(urls);

      if (response) {
        router.push(`/scan/${response.submissionId}`);
      }
    } catch (e) {
      console.log("error");
      setIsWarning(true);
      console.error(e);
    } finally {
      console.log("end");
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

        <ModalWrapper isOpen={isScanning} onClose={() => {}}>
          <div className="flex flex-col justify-center items-center gap-4 max-w-xs w-full h-64 m-auto">
            <FaSpinner
              className={`w-16 h-16 ${isScanning && "animate-spin"}`}
            />
            <p className="text-lg text-center">
              Please wait for a moment while your request is being processed
            </p>
          </div>
        </ModalWrapper>

        <ModalWrapper isOpen={isWarning} onClose={() => setIsWarning(false)}>
          <div className="flex flex-col justify-center items-center gap-4 max-w-xs w-full h-64 m-auto">
            <FaExclamationTriangle className={`w-16 h-16`} />
            <p className="text-lg text-center">
              An has occured while processing your URLs. One of your URLs maybe
              unreachable. Please check your input and try again.
            </p>
          </div>
          <Button
            className="w-full h-14"
            onClick={() => setIsWarning(false)}
            primary
          >
            Go back
          </Button>
          <Button
            className="w-full h-14 mt-4"
            onClick={() => {
              setIsWarning(false);
              submitUrls(latestUrls);
            }}
          >
            Retry
          </Button>
        </ModalWrapper>
      </div>
    </>
  );
}

export default Scanner;
