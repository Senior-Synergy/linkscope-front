"use client";

import SearchResultDisplay from "@/components/search/SearchResultDisplay";
import { Verdict } from "@/types/searchTypes";
import React from "react";

interface UrlInfo {
  url: string;
  verdict: Verdict;
  date: Date;
  relatedUrl: string[];
}

function ResultPage() {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scanResults: UrlInfo[] = [
    {
      url: "https://example.com/page1",
      verdict: Verdict.SAFE,
      date: new Date("2024-01-29T10:00:00"),
      relatedUrl: ["test1.com", "test2.com"],
    },
    {
      url: "https://example.net/page2",
      verdict: Verdict.UNSAFE,
      date: new Date("2024-01-29T11:30:00"),
      relatedUrl: ["test3.com"],
    },
    // Add more dummy data as needed
  ];

  return (
    <>
      <main className="flex flex-col gap-y-4 p-4 md:p-8 self-center w-full max-w-6xl">
        <header>
          <h1 className="text-5xl font-black text-primary">Results</h1>
          {/* <p className="text-gray-600">
            Explanation about the what this page offers.
          </p> */}
        </header>

        <div>
          <h2 className="text-xl font-bold mb-4">All Scanned URLs</h2>
          <div
            className="flex flex-col gap-4 p-4 border rounded-xl 
                      drop-shadow bg-white"
          >
            {scanResults.map((scanResult, index) => (
              <button
                onClick={() => handleClick(`result-${index}`)}
                className="flex items-center justify-between p-2 gap-2
                    rounded-lg border bg-white"
              >
                <p className="truncate">{scanResult.url}</p>
                <div
                  className={`text-white text-center font-medium w-16 p-1 rounded ${
                    scanResult.verdict === Verdict.SAFE
                      ? "bg-green-500"
                      : "bg-amber-500"
                  }`}
                >
                  {scanResult.verdict}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Summarized Reports</h2>
          <div className="flex flex-col gap-4">
            {scanResults.map((scanResult, index) => (
              <div
                id={`result-${index}`}
                key={index}
                className="flex flex-col gap-4 p-4 border rounded-xl 
                          drop-shadow bg-white"
              >
                <div
                  className={`flex w-full min-h-28 justify-between items-center gap-4S p-4 rounded-lg shadow text-white ${
                    scanResult.verdict === Verdict.SAFE
                      ? "bg-green-500"
                      : "bg-amber-500"
                  }`}
                >
                  <div className="flex gap-4">
                    <div>
                      <h3 className="font-bold text-xl">{scanResult.url}</h3>
                      <p className="font-light">
                        This URL is considered
                        <span className="font-bold"> {scanResult.verdict}.</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-1">Summary</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc consequat gravida mauris. Nulla fringilla metus ut
                    purus blandit accumsan.
                  </p>
                </div>

                <div className="flex flex-col p-2 gap-2 border rounded-lg bg-gray-50">
                  <p className="font-bold mb-1">Suspected Features</p>
                  <div className="flex justify-center gap-2">
                    <div className="flex items-center gap-4 bg-white border p-4 rounded-lg w-1/2">
                      <div className="bg-gray-300 rounded-full h-16 w-16" />
                      <div>
                        <p className="font-medium">Feature name</p>
                        <p className="font-light">Secondary factor</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white border p-4 rounded-lg w-1/2">
                      <div className="bg-gray-300 rounded-full h-16 w-16" />
                      <div>
                        <p className="font-medium">Feature name</p>
                        <p className="font-light">Secondary factor</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-1">Explore</h3>
                  <p className="text-gray-600 mb-2">
                    Nulla fringilla metus ut purus blandit accumsan.
                  </p>
                  <div className="flex flex-col p-2 gap-2 border rounded-lg bg-gray-50">
                    {scanResult.relatedUrl.map((relatedUrl) => (
                      <div
                        className="flex items-center justify-between p-2 gap-2
                    rounded-lg border bg-white"
                      >
                        <p className="truncate">{relatedUrl}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-end w-full space-x-4">
                  <button
                    className={`flex items-center justify-center 
                        w-1/2 h-12 rounded-lg 
                        border
                        transition-all ${
                          true
                            ? "border-primary text-primary hover:bg-primary-dark hover:border-primary-dark hover:text-white"
                            : "pointer-events-none text-deactive border-deactive"
                        }`}
                  >
                    Visit site
                  </button>

                  <button
                    className={`flex items-center justify-center 
                        w-1/2 h-12 rounded-lg 
                        text-white 
                        transition-all ${
                          true
                            ? "bg-primary hover:bg-primary-dark"
                            : "pointer-events-none bg-deactive"
                        }`}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="bg-primary p-4 rounded-lg shadow text-white">
      <h2 className="text-xl font-semibold mb-2">Getting Started:</h2>
      <ol className="list-disc pl-6">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>
    </div> */}
      </main>
    </>
  );
}

export default ResultPage;

function verdictBox() {
  return (
    <div className="flex w-full min-h-28 justify-between items-center gap-4 bg-primary p-4 rounded-lg shadow text-white">
      <div className="flex gap-4">
        <div>
          <h3 className="font-bold text-xl">Search URLs</h3>
          <p className="font-light">Explore previously scanned URLs</p>
        </div>
      </div>
      <div className="shrink-0 h-6 w-6 rounded-full bg-white" />
    </div>
  );
}
