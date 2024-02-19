"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import UrlListDisplay from "./UrlList";
import { UrlInfo, Verdict } from "@/types/searchTypes";

function Searcher() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<UrlInfo[] | null>(
    null
  );

  const [recentUrls, setRecentUrls] =
    useState<UrlInfo[]>(dummySearchResults);

  return (
    <>
      <SearchBar textInput={searchQuery} onTextInputChange={setSearchQuery}/>

      {searchResults && searchResults.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Results</h2>
          <UrlListDisplay urlList={searchResults} />
        </div>
      )}

      <div>
        <h2 className="text-xl font-bold mb-4">Recent URLs</h2>
        <UrlListDisplay urlList={recentUrls} />
      </div>
    </>
  );
}

export default Searcher;

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
