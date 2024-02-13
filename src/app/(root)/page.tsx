import Scanner from "@/components/scanner/Scanner";
import SearchResultDisplay from "@/components/search/SearchResultDisplay";
import { SearchResult, Verdict } from "@/types/searchTypes";
import Image from "next/image";

function Home() {
  const dummySearchResults: SearchResult[] = [
    {
      url: "https://example.com/page1",
      verdict: Verdict.SAFE,
      date: new Date("2024-01-29T10:00:00"),
    },
    {
      url: "https://example.net/page2",
      verdict: Verdict.UNSAFE,
      date: new Date("2024-01-29T11:30:00"),
    },
    {
      url: "https://example.com/page1",
      verdict: Verdict.SAFE,
      date: new Date("2024-01-29T10:00:00"),
    },
    {
      url: "https://example.net/page2",
      verdict: Verdict.UNSAFE,
      date: new Date("2024-01-29T11:30:00"),
    },
    {
      url: "https://example.org/page3",
      verdict: Verdict.SAFE,
      date: new Date("2024-01-29T14:45:00"),
    },
    {
      url: "https://example.com/page4",
      verdict: Verdict.UNSAFE,
      date: new Date("2024-01-29T16:20:00"),
    },
    {
      url: "https://example.net/page5",
      verdict: Verdict.SAFE,
      date: new Date("2024-01-29T18:15:00"),
    },
    // Add more dummy data as needed
  ];

  return (
    <>
      <main className="flex flex-col space-y-8 p-4 md:p-8 self-center w-full max-w-6xl">
        <header>
          <h1 className="text-5xl font-black mb-4 text-primary">
            Welcome to LinkScope
          </h1>
          <p className="text-gray-600">
            LinkScope is your go-to destination for comprehensive URL scanning
            and analysis. Safeguard yourself against phishing attempts by
            utilizing our advanced URL Scanner. Detect potential threats and
            protect your online experience.
          </p>
        </header>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex w-full md:w-1/2 min-h-28 justify-between items-center gap-4 bg-primary p-4 rounded-lg shadow text-white">
              <div className="flex gap-4">
                <Image
                  src={"/logo/logo-white.svg"}
                  alt="logo"
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="font-bold text-xl">URL Scanner</h3>
                  <p className="font-light">Detect phishing links</p>
                </div>
              </div>
              <div className="shrink-0 h-6 w-6 rounded-full bg-white" />
            </div>
            <div className="flex w-full md:w-1/2 min-h-28 justify-between items-center gap-4 bg-primary p-4 rounded-lg shadow text-white">
              <div className="flex gap-4">
                <Image
                  src={"/logo/logo-white.svg"}
                  alt="logo"
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="font-bold text-xl">Search URLs</h3>
                  <p className="font-light">Explore previously scanned URLs</p>
                </div>
              </div>
              <div className="shrink-0 h-6 w-6 rounded-full bg-white" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Recently Scanned URLs</h2>
          <SearchResultDisplay searchResults={dummySearchResults} />
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

export default Home;
