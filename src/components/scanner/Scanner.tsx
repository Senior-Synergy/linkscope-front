"use client";

import { useState } from "react";

import TabSelector from "../common/TabSelector";
import ManualScanner from "./ManualScanner";
import AutoScanner from "./AutoScanner";

function Scanner() {
  const scannerModeOptions = [
    { title: "Manual", value: 1 },
    { title: "Automatic", value: 0 },
  ];

  const [scannerMode, setScannerMode] = useState(1);

  function changeScannerMode(targetMode: number) {
    setScannerMode(targetMode);
  }

  return (
    <>
      <div className="bg-gray-50 border p-4 rounded-xl">
        <div className="h-12 mb-4">
          <TabSelector
            currentItem={scannerMode}
            itemList={scannerModeOptions}
            onSelect={changeScannerMode}
          />
        </div>

        {scannerMode === 0 && <AutoScanner />}

        {scannerMode === 1 && <ManualScanner />}
      </div>
    </>
  );
}

export default Scanner;
