import UrlList from "../search/UrlList";

import { UrlInfo, Verdict } from "@/types/searchTypes";

function RecentUrls() {
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
    <div>
      <div className="p-4">
        <h2 className="text-xl font-bold">Recent URLs</h2>
      </div>

      <UrlList urlList={recentUrls} />
    </div>
  );
}

export default RecentUrls;
