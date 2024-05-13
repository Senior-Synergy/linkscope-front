import { searchUrls } from "@/services/linkscopeApi";
import { UrlCommon } from "@/types/urlTypes";

import { notFound } from "next/navigation";
import Paginator from "../common/Paginator";
import UrlGrid from "./UrlGrid";

interface SearchUrlGridProps {
  searchQuery: string;
  pageNumber: number;
  sortOption: string;
}

async function SearchUrlGrid({
  searchQuery,
  pageNumber,
  sortOption,
}: SearchUrlGridProps) {
  let urls: UrlCommon[] = [];
  let totalCount: number = 0;

  const fetchedData = await searchUrls(searchQuery, pageNumber, 12, sortOption);

  if (fetchedData) {
    urls = fetchedData.urls;
    totalCount = fetchedData.totalCount;
  } else {
    return notFound();
  }

  return (
    <div>
      <UrlGrid urls={urls} />
      <div className="mt-8">
        <Paginator pageSize={12} totalCount={totalCount} />
      </div>
    </div>
  );
}

export default SearchUrlGrid;
