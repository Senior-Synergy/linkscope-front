// server component...

import { searchResults } from "@/services/linkscopeApi";
import { Result } from "@/types/urlTypes";
import ResultList from "./ResultList";

import Paginator from "../common/Paginator";
import { notFound } from "next/navigation";

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
    return notFound();
  }

  return (
    <>
      <ResultList results={results} />
      <Paginator totalCount={totalCount} pageSize={10} />
    </>
  );
}

export default SearchResultList;
