"use client";

import Scanner from "@/components/scanner/Scanner";
import React from "react";

function ScanPage() {
  return (
    <>
      <main className="flex flex-col space-y-8 p-4 md:p-8 self-center w-full max-w-6xl">
        <header>
          <h1 className="text-5xl font-black mb-4 text-primary">URL Scanner</h1>
          <p className="text-gray-600">
            Unleash the power of our cutting-edge URL Scanner to identify
            phishing links. Our tool utlize machine learning to analyze URLs,
            providing you with instant insights into potential risks. Simply
            input text and it will automatically identify URLs within it. Follow
            the steps below to scan and process URLs.
          </p>
        </header>

        <div className="bg-primary p-4 rounded-lg shadow text-white">
          <h2 className="text-xl font-semibold mb-2">How to Use:</h2>
          <ol className="list-decimal pl-6">
            <li>Enter your text in the input area.</li>
            <li>Select the URLs you want to process.</li>
            <li>Click the "Submit" button to initiate the scanning process.</li>
          </ol>
        </div>

        {/* URL Scanner */}
        <Scanner />

        <footer className="mt-8 text-gray-500 text-sm">
          <p>URL Scanner | LinkScope</p>
        </footer>
      </main>
    </>
  );
}

export default ScanPage;
