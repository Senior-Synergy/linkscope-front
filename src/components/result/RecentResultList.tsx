import { searchResults } from "@/services/linkscopeApi";
import { Result } from "@/types/urlTypes";
import { notFound } from "next/navigation";

import ResultList from "./ResultList";
// import Paginator from "../common/Paginator";

async function RecentResultList() {
  let results: Result[] = [];
  let totalCount: number = 0;

  const fetchedData = await searchResults("", 1, 5);

  if (fetchedData) {
    results = fetchedData.results;
    totalCount = fetchedData.totalCount;
  } else {
    return notFound();
  }

  return (
    <>
      <ResultList results={results} />
      {/* <Paginator totalCount={totalCount} pageSize={10} /> */}
    </>
  );
}

export default RecentResultList;
