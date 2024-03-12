"use client";

import React, { useState } from "react";

import SearchBar from "./SearchBar";
import UrlList from "./UrlList";

import { UrlInfo } from "@/types/searchTypes";

function Searcher() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<UrlInfo[] | null>(null);

  return (
    <>
      <SearchBar textInput={searchQuery} onTextInputChange={setSearchQuery} />

      {searchResults && searchResults.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Results</h2>
          <UrlList urlList={searchResults} />
        </div>
      )}
    </>
  );
}

export default Searcher;
