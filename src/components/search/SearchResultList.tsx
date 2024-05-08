// server component...

import { searchResults } from "@/services/linkscopeApi";
import { Result } from "@/types/urlTypes";
import ResultList from "./ResultList";

import ResultListPaginator from "./ResultListPaginator";

interface SearchResultListProps {
  searchQuery: string;
  pageNumber: number;
  sortOption: string;
}

async function SearchResultList({
  searchQuery,
  pageNumber,
  sortOption,
}: SearchResultListProps) {
  let results: Result[] = [];
  let totalCount: number = 0;

  const fetchedData = await searchResults(
    searchQuery,
    pageNumber,
    10,
    sortOption
  );

  if (fetchedData) {
    results = fetchedData.results;
    totalCount = fetchedData.totalCount;
  } else {
    throw new Error("Failed to fetch data");
  }

  return (
    <>
      <ResultList results={results} />
      <ResultListPaginator totalCount={totalCount} />
    </>
  );
}

export default SearchResultList;
