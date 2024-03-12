import Link from "next/link";

import UrlList from "@/components/search/UrlList";

import { UrlInfo, Verdict } from "@/types/searchTypes";

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

  // const stats = [
  //   { value: "#1", description: "Stat-1" },
  //   { value: "95%", description: "Stat-2" },
  //   { value: ">600k", description: "Stat-3" },
  // ];

  return (
    <main className="flex flex-col p-4 gap-4">
      <header>
        <h1 className="text-3xl font-bold p-4 mb-2">
          Welcome To Senior Synergy
        </h1>
        <div className="flex flex-col w-full gap-4 p-4 rounded-xl border bg-white shadow-lg">
          <h2 className="text-2xl font-bold">
            Introducing,<span className="text-primary"> LinkScope</span>
          </h2>

          <p>
            LinkScope is a cutting-edge URL Scanner to identify phishing links.
            Our tool utilize machine learning to analyze URLs, providing you
            with instant insights into potential risks. Simply input text and it
            will automatically identify URLs within it.
          </p>

          <div className="flex w-full gap-4">
            <Link
              href="/docs"
              className="flex items-center justify-center w-1/2 h-12 rounded-lg bg-white text-primary border border-primary-light hover:bg-primary-light hover:border-transparent hover:text-white transition-all"
            >
              Learn more
            </Link>
            <Link
              href="/scan"
              className="flex items-center justify-center w-1/2 h-12 rounded-lg bg-primary text-white hover:bg-primary-dark hover:text-white transition-all"
            >
              Start now
            </Link>
          </div>
        </div>
        {/* <p className="bg-white border p-4 rounded-xl">
            Suspendisse dolor nisl, rhoncus eu arcu non, suscipit convallis
            nulla. Vivamus laoreet nunc libero, sed hendrerit magna tincidunt
            vitae. Etiam eget euismod enim.
          </p> */}
      </header>

      <div>
        <h2 className="text-xl font-bold p-4">Quick Access</h2>

        <div className="flex flex-col w-full gap-4 p-4 rounded-xl bg-white border shadow-lg">
          To be updated
        </div>
      </div>

      {/* <div>
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
        </div> */}

      <div>
        <h2 className="text-xl font-bold p-4">Recently Scanned URLs</h2>
        <UrlList urlList={dummyUrlList} />
      </div>

      <footer className="p-4 text-gray-500 text-sm">
        <p>LinkScope | Senior Synergy</p>
      </footer>
    </main>
  );
};

export default HomePage;
