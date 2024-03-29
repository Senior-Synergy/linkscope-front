import { UrlInfo, Verdict } from "@/types/searchTypes";

import Link from "next/link";

import UrlList from "@/components/search/UrlList";
import Button from "@/components/common/Button";
import Footer from "@/components/common/Footer";

const HomePage = () => {
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
    // Add more dummy data as needed
  ];

  return (
    <main className="flex flex-col p-6 md:p-8 gap-6">
      <header>
        <h1 className="text-4xl font-bold">Home</h1>
      </header>
      <div className="flex flex-col w-full gap-4 p-4 rounded-xl bg-gray-50 border">
        <h1 className="text-3xl font-bold">
          Introducing,<span className="text-primary"> LINKSCOPE</span>
        </h1>

        <p>
          LinkScope is a cutting-edge URL Scanner to identify phishing links.
          Our tool utilize machine learning to analyze URLs, providing you with
          instant insights into potential risks. Simply input text and it will
          automatically identify URLs within it.
        </p>

        <div className="flex w-full h-12 gap-4">
          <div className="w-1/2">
            <Link href="/docs">
              <Button title="Learn more" />
            </Link>
          </div>
          <div className="w-1/2">
            <Link href="/scan">
              <Button title="Start now" primary />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Quick Start</h2>
        <p className="mb-4">
          Copy and paste text that contain URLs and start analyzing it now!
        </p>
        <div className="flex flex-col w-full gap-4 p-4 rounded-xl bg-gray-50 border">
          Coming soon...
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Recently Scanned URLs</h2>

        <div>
          <UrlList urlList={dummyUrlList} />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default HomePage;
