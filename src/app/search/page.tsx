import Searcher from "@/components/search/Searcher";
import React from "react";

function SearchPage() {
  return (
    <main className="flex flex-col flex-auto gap-8 p-4 md:p-8 self-center w-full max-w-6xl bg-white">
      <header>
        <h1 className="text-3xl font-bold mb-4">Search URLs</h1>
        <p className="text-gray-600">
          {`Explore a vast database of previously scanned URLs using our Search
          feature. Navigate and retrieve valuable information by investigating a
          specific link with LinkScope's Search functionality.`}
        </p>
      </header>

      <Searcher />

      <footer className="mt-8 text-gray-500 text-sm">
        <p>LinkScope | Senior Synergy</p>
      </footer>
    </main>
  );
}

export default SearchPage;
