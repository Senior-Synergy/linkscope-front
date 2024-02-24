import Scanner from "@/components/scanner/Scanner";
import UrlListDisplay from "@/components/search/UrlList";
import { UrlInfo, Verdict } from "@/types/searchTypes";
import Image from "next/image";

import scanPagePic from "../../public/images/screenshots/scan-page.png";
import Link from "next/link";

function Home() {
  const dummyUrlList: UrlInfo[] = [
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

  const stats = [
    { value: "#1", description: "Example" },
    { value: "95%", description: "Accuracy" },
    { value: ">600k", description: "Example" },
  ];

  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-br from-primary to-accent">
        <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-8 px-8 py-12">
          <header className="w-full md:w-1/2 space-y-4 text-white">
            <h1 className="text-5xl font-bold">Introducing, LinkScope</h1>
            <p>
              LinkScope is a cutting-edge URL Scanner to identify phishing
              links. Our tool utlize machine learning to analyze URLs, providing
              you with instant insights into potential risks. Simply input text
              and it will automatically identify URLs within it.
            </p>
            <p className="font-medium text-xl">Try for Free!</p>
            <Link
              href="/scan"
              className="flex items-center justify-center w-52 h-12 rounded-lg font-medium bg-accent text-white hover:bg-accent-dark hover:text-white transition-all"
            >
              Start now
            </Link>
          </header>
          <Image
            src={scanPagePic}
            alt="scan-page"
            className="rounded-xl w-full md:w-1/2 h-auto "
          />
        </div>
      </div>

      {/* <div className="flex flex-col items-center bg-white">
        <div className="flex justify-center w-full max-w-6xl px-8 py-12 gap-20">
          {stats.map((stat, index) => (
            <div className="space-y-4" key={index}>
              <p className="font-bold text-4xl">{stat.value}</p>
              <p className="text-gray-700">{stat.description}</p>
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex flex-col flex-auto gap-8 p-8 self-center w-full max-w-6xl bg-white">
        <div>
          <h2 className="text-xl font-bold mb-4">
            You Might Be Interested In:
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex w-full md:w-1/2 min-h-28 justify-between items-center gap-4 bg-primary p-4 rounded-xl text-white">
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
            <div className="flex w-full md:w-1/2 min-h-28 justify-between items-center gap-4 bg-primary p-4 rounded-xl text-white">
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
          <UrlListDisplay urlList={dummyUrlList} />
        </div>

        {/* <div className="bg-primary p-4 rounded-lg shadow text-white">
          <h2 className="text-xl font-semibold mb-2">Getting Started:</h2>
          <ol className="list-disc pl-6">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>
          </div> */}
        <footer className="mt-8 text-gray-500 text-sm">
          <p>LinkScope | Senior Synergy</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
