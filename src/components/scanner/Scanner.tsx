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
import { useTranslations } from "next-intl";

function Scanner() {
  const router = useRouter();

  const t = useTranslations("Common");
  const t_scanner = useTranslations("Scanner");

  const [isScanning, setIsScanning] = useState(false);
  const [isWarning, setIsWarning] = useState(false);

  const [latestUrls, setLatestUrls] = useState<string[]>([]);

  const scannerModeOptions = [
    { title: t("normal"), value: 1 },
    { title: t("auto"), value: 0 },
  ];

  const [scannerMode, setScannerMode] = useState(1);

  function changeScannerMode(targetMode: number) {
    setScannerMode(targetMode);
  }

  async function submitUrls(urls: string[]) {
    setLatestUrls(urls);
    setIsScanning(true);

    try {
      const response = await createBulkSubmission(urls);

      if (response) {
        router.push(`/scan/${response.submissionId}`);
      }
    } catch (e) {
      setIsWarning(true);
      console.error(e);
    } finally {
      setIsScanning(false);
    }
  }

  return (
    <>
      <div
        className={`relative overflow-hidden 
                  border p-4 rounded-lg 
                  bg-gray-50 dark:bg-gray-950
                  ${isScanning && "pointer-events-none"}`}
      >
        <div className="h-10">
          <TabSelector
            currentValue={scannerMode}
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
            <p className="text-lg text-center">{t_scanner("message.wait")}</p>
          </div>
        </ModalWrapper>

        <ModalWrapper isOpen={isWarning} onClose={() => setIsWarning(false)}>
          <div className="flex flex-col justify-center items-center gap-4 max-w-xs w-full h-64 m-auto">
            <FaExclamationTriangle className={`w-16 h-16`} />
            <p className="text-lg text-center">
              {t_scanner("message.scan-error")}
            </p>
          </div>
          <Button
            className="w-full h-14"
            onClick={() => setIsWarning(false)}
            primary
          >
            {t("go-back")}
          </Button>
          <Button
            className="w-full h-14 mt-4"
            onClick={() => {
              setIsWarning(false);
              submitUrls(latestUrls);
            }}
          >
            {t("retry")}
          </Button>
        </ModalWrapper>
      </div>
    </>
  );
}

export default Scanner;
