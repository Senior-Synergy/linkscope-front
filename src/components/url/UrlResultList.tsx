import { getUrlResults } from "@/services/linkscopeApi";
import { Result, UrlExtended } from "@/types/urlTypes";
import { notFound } from "next/navigation";
import React from "react";
import ResultList from "../search/ResultList";
import Paginator from "../common/Paginator";

interface UrlResultListProps {
  url: UrlExtended;
  pageNumber: number;
}

async function UrlResultList({ url, pageNumber }: UrlResultListProps) {
  let results: Result[] = [];
  let totalCount: number = 0;

  const fetchedData = await getUrlResults(url.urlId, pageNumber, 10);

  if (fetchedData) {
    results = fetchedData.results.map((result) => ({ ...result, url: url }));
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

export default UrlResultList;
