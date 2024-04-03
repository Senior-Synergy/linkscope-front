"use client";

import React, { useState } from "react";

import SearchBar from "./SearchBar";
import UrlList from "./UrlList";
import { Url } from "@/types/urlTypes";

function Searcher() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Url[] | null>(null);

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
