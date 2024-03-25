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

  function changeScannerMode(target: number) {
    setScannerMode(target);
  }

  return (
    <>
      {scannerMode === 0 && (
        <div>
          <h3 className="text-xl font-bold mb-2">
            Automatic Mode
            <span className="text-red-500 font-light"> (experimental)</span>
          </h3>
          <p className="mb-2">
            Simply Input a text body that contains suspecious URLs.
            <span className="font-bold text-primary"> LINKSCOPE</span> will
            automatically extract those URLs from the text body for you.
          </p>
          <p>
            <span className="font-bold">Note: </span>
            Some unique URLs may not be recognized.
          </p>
        </div>
      )}

      {scannerMode === 1 && (
        <div>
          <h3 className="text-xl font-bold mb-2">Manual Mode</h3>
          <p>
            Manually input individual URLs that you wish to scan.
            <span className="font-bold text-primary"> LINKSCOPE</span> will
            validate your URLs before continuing.
          </p>
        </div>
      )}

      <div>
        <div className="h-12 mb-4">
          <TabSelector
            currentItem={scannerMode}
            itemList={scannerModeOptions}
            onSelect={changeScannerMode}
          />
        </div>

        {scannerMode === 0 && (
          <>
            <AutoScanner />
          </>
        )}

        {scannerMode === 1 && (
          <>
            <ManualScanner />
          </>
        )}
      </div>
    </>
  );
}

export default Scanner;
