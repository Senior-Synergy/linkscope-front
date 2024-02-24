import Scanner from "@/components/scanner/Scanner";
import Searcher from "@/components/search/Searcher";
import UrlListDisplay from "@/components/search/UrlList";
import { UrlInfo, Verdict } from "@/types/searchTypes";
import Image from "next/image";

function Home() {
  const dummySearchResults: UrlInfo[] = [
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
      <div className="flex flex-col flex-auto gap-8 p-8 self-center w-full max-w-6xl bg-white">
        <div>
          <h1 className="text-3xl font-bold mb-4">LinkScope</h1>
          <p className="text-gray-600">
            {`LinkScope is a cutting-edge URL Scanner to identify phishing links.
            Our tool utlize machine learning to analyze URLs, providing you with
            instant insights into potential risks. Simply input text and it will
            automatically identify URLs within it.`}
          </p>
        </div>

        {/* URL Scanner */}
        <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-8 p-8 bg-gradient-to-br from-primary to-accent rounded-2xl">
          <header className="w-full md:w-1/3 space-y-4 text-white">
            <div>
              <h2 className="text-xl font-semibold mb-2">How to Use:</h2>
              <ol className="list-decimal pl-6 font-light">
                <li>{`Enter your text in the input area.`}</li>
                <li>{`Select the URLs you want to process.`}</li>
                <li>{`Click the "Submit" button to initiate the scanning process.`}</li>
              </ol>
            </div>
            <p>Follow the steps to scan and process URLs.</p>
          </header>

          <div className="w-full md:w-2/3">
            <Scanner />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Recently Scanned URLs</h2>
          <p className="text-gray-600 mb-6">
            Suspendisse dolor nisl, rhoncus eu arcu non, suscipit convallis
            nulla. Vivamus laoreet nunc libero, sed hendrerit magna tincidunt
            vitae. Etiam eget euismod enim. Vivamus vitae nibh vel sem facilisis
            convallis. Cras eget dignissim orci. Proin massa erat, ornare non
            massa eget, porttitor interdum risus. Vestibulum vel ex fermentum,
            rutrum nisl eget, cursus tellus. Nunc nec tempus nisl.
          </p>
          <UrlListDisplay urlList={dummySearchResults} />
        </div>

        {/* <div className="bg-primary p-4 rounded-lg shadow text-white">
          <h2 className="text-xl font-semibold mb-2">Getting Started:</h2>
          <ol className="list-disc pl-6">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ol>
          </div> */}

        {/* <div>
          <h2 className="text-xl font-bold mb-4">
            You Might Be Interested In:
          </h2>
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

          <footer className="mt-8 text-gray-500 text-sm">
            <p>LinkScope | Senior Synergy</p>
          </footer>
        </div> */}
      </div>
    </>
  );
}

export default Home;
