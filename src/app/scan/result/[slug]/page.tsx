"use client"

import Footer from "@/components/common/Footer";
import { FaChevronRight, FaClipboard, FaCopy } from "react-icons/fa6";

const ScanResultPage = ({ params }: { params: { slug: string } }) => {
  const scanId = params.slug;

  const results = [
    {
      url: "https://www.test.com/1",
      inputtedUrl: "www.test.com/1",
      phishProb: 0.75,
      isPhish: true,
      features: {
        mockOne: "",
        mockTrue: "",
        mockThree: "",
      },
    },
    {
      url: "https://www.test.com/2",
      inputtedUrl: "https://www.test.com/2",
      phishProb: 0.01,
      isPhish: false,
      features: {
        mockOne: "",
        mockTrue: "",
        mockThree: "",
      },
    },
    {
      url: "https://www.test.com/3",
      inputtedUrl: "test.com/3",
      phishProb: 0.99,
      isPhish: true,
      features: {
        mockOne: "",
        mockTrue: "",
        mockThree: "",
      },
    },
  ];

  const safeItems = results.filter((result) => !result.isPhish);
  const unsafeItems = results.filter((result) => result.isPhish);

  const summaryItems = [
    { title: "Total URL(s) submitted", value: results.length },
    { title: "Safe URL(s)", value: safeItems.length },
    { title: "Potentially Unsafe URL(s)", value: unsafeItems.length },
  ];

  return (
    <main className="flex flex-col p-6 md:p-8 gap-8">
      <header className="flex flex-col w-full gap-4">
        <h1 className="text-3xl font-bold">Result</h1>
        <p>
          All requested URLs has been successfully analyzed. A total of # URL(s)
          has been scanned. # are identified as safe, while # are identified
          potentially unsafe URLs. Here are the results:
        </p>
      </header>

      <div>
        <h2 className="text-xl font-bold mb-4">Summarized Report</h2>

        <div className="bg-gray-50 p-4 rounded-xl border">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full sm:w-1/2 border border-green-500 rounded-lg overflow-hidden">
              <div className="bg-green-400 p-4">
                <p className="text-white">
                  Potentially<span className="font-semibold"> Safe</span>
                </p>
              </div>
              <ul className="flex flex-col grow gap-2 p-2 bg-gray-100">
                {safeItems.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-4 border rounded-lg bg-white"
                  >
                    <p className="grow truncate">{result.url}</p>
                    <FaChevronRight className="w-5 h-5 fill-gray-400 shrink-0" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col w-full sm:w-1/2 border border-orange-500 rounded-lg overflow-hidden">
              <div className="bg-orange-400 p-4">
                <p className="text-white">
                  Potentially<span className="font-semibold"> Unsafe</span>
                </p>
              </div>
              <ul className="flex flex-col grow gap-2 p-2 bg-gray-100">
                {unsafeItems.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-4 border rounded-lg bg-white"
                  >
                    <p className="grow truncate">{result.url}</p>
                    <FaChevronRight className="w-5 h-5 fill-gray-400 shrink-0" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full">
              <tbody className="divide-y">
                {summaryItems.map((item, index) => (
                  <tr key={index} className="divide-x">
                    <td className="px-4 py-2 font-medium bg-gray-100">
                      {item.title}
                    </td>
                    <td className="px-4 py-2 font-medium bg-white text-center">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Scanned URL Information</h2>
        <p className="mb-4">In-depth information about each URL scanned.</p>
        <div
          className="flex flex-col
                w-full 
                rounded-xl bg-gray-50 border
                divide-y divide
                overflow-hidden"
        >
          {results.map((result, index) => (
            <div key={index} className="flex flex-col p-4 gap-4">
              <div className="flex items-center justify-between">
                <p className="truncate font-semibold ">{result.url}</p>
                <div className="flex items-center gap-4">
                  <p>{new Date().toDateString()}</p>
                  <div
                    className={`text-white text-center text-sm font-medium w-20 p-1 rounded ${
                      !result.isPhish ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {!result.isPhish ? "SAFE" : "UNSAFE"}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-2 bg-gray-100 border rounded-lg">
                <div className="flex items-center gap-2">
                  <p className="font-medium">Inputted URL:</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(result.inputtedUrl);
                    }}
                    className="flex items-center justify-between grow p-2 bg-white hover:bg-gray-200 border rounded-md transition-colors"
                  >
                    <p className="truncate">{result.inputtedUrl}</p>
                    <FaCopy className="w-4 h-4 fill-gray-400 shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ScanResultPage;
