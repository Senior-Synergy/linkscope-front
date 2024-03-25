"use client";

import { useState } from "react";

import TabSelector from "../common/TabSelector";
import ManualScanner from "./ManualScanner";
import AutoScanner from "./AutoScanner";

function Scanner() {
  const scannerModeOptions = [
    { title: "Automatic", value: 0 },
    { title: "Manual", value: 1 },
  ];

  const [scannerMode, setScannerMode] = useState(0);

  function changeScannerMode(target: number) {
    setScannerMode(target);
  }

  return (
    <>
      <div className="h-12">
        <TabSelector
          currentItem={scannerMode}
          itemList={scannerModeOptions}
          onSelect={changeScannerMode}
        />
      </div>

      {scannerMode === 0 && (
        <>
          <div>
            <h3 className="text-xl font-bold mb-2">Automatic Mode:</h3>
            <p>
              Simply Input a text body that contains suspecious URLs.
              <span className="font-bold text-primary"> LINKSCOPE</span> will
              automatically extract those URLs from the text body for you.
            </p>
          </div>

          <AutoScanner />
        </>
      )}

      {scannerMode === 1 && (
        <>
          <div>
            <h3 className="text-xl font-bold mb-2">Manual Mode:</h3>
            <p>
              Manually input individual URLs that you wish to scan.
              <span className="font-bold text-primary"> LINKSCOPE</span> will
              validate your URLs before continuing.
            </p>
          </div>

          <ManualScanner />
        </>
      )}
    </>
  );
}

export default Scanner;
