"use client";

import Scanner from "@/components/scanner/Scanner";
import Image from "next/image";
import React from "react";

function ScanPage() {
  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-br from-primary-light to-primary-dark">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 w-full max-w-6xl p-8">
          <header className="w-full md:w-1/3 space-y-4">
            {/* <Image
              src={"/logo/logo-white.svg"}
              alt="logo"
              width={128}
              height={32}
            /> */}
            <h1 className="text-5xl font-bold text-white">URL Scanner</h1>
            <p className="text-white font-light">
              Unleash the power of our cutting-edge URL Scanner to identify
              phishing links. Our tool utlize machine learning to analyze URLs,
              providing you with instant insights into potential risks. Simply
              input text and it will automatically identify URLs within it.
            </p>
            <p className="text-white underline underline-offset-2">
              Follow the steps to scan and process URLs.
            </p>
          </header>

          <div className="w-full md:w-2/3">
            <Scanner />
          </div>
        </div>
      </div>

      <main className="flex flex-col gap-8 p-8 self-center w-full max-w-6xl">
        {/* URL Scanner */}

        <div>
          <h2 className="text-xl font-semibold mb-2">How to Use:</h2>
          <ol className="list-decimal pl-6">
            <li>Enter your text in the input area.</li>
            <li>Select the URLs you want to process.</li>
            <li>{`Click the "Submit" button to initiate the scanning process.`}</li>
          </ol>
        </div>

        <footer className="mt-8 text-gray-500 text-sm">
          <p>URL Scanner | LinkScope</p>
        </footer>
      </main>
    </>
  );
}

export default ScanPage;
