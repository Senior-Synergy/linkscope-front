import Footer from "@/components/common/Footer";
import Searcher from "@/components/search/Searcher";
import UrlList from "@/components/search/UrlList";
import { UrlInfo, Verdict } from "@/types/searchTypes";

function SearchPage() {
  const recentUrls: UrlInfo[] = [
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
    <main className="flex flex-col gap-8 p-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Search URLs</h1>
        <p>
          {`Explore our database of previously scanned URLs using our Search
          feature.`}
        </p>
      </header>

      <div>
        <h2 className="text-xl font-bold mb-4">Searcher</h2>
        <Searcher />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Recent URLs</h2>
        <UrlList urlList={recentUrls} />
      </div>

      <Footer />
    </main>
  );
}

export default SearchPage;
