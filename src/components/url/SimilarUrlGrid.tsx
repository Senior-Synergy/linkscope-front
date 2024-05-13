import { getSimilarUrls, searchUrls } from "@/services/linkscopeApi";
import { UrlCommon } from "@/types/urlTypes";

import { notFound } from "next/navigation";
import Paginator from "../common/Paginator";
import UrlGrid from "./UrlGrid";

interface SimilarUrlGridProps {
  urlId: number;
}

async function SimilarUrlGrid({ urlId }: SimilarUrlGridProps) {
  let urls: UrlCommon[] = [];

  const fetchedData = await getSimilarUrls(urlId, 100, 4);

  if (fetchedData) {
    urls = fetchedData;
  } else {
    return notFound();
  }

  return (
    <div>
      <UrlGrid urls={urls} />
      {/* <div className="mt-8">
        <Paginator pageSize={12} totalCount={totalCount} />
      </div> */}
    </div>
  );
}

export default SimilarUrlGrid;
