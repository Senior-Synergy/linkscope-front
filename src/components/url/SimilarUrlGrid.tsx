import { notFound } from "next/navigation";

import UrlGrid from "./UrlGrid";
import { getSimilarUrls } from "@/services/linkscopeApi";
import { UrlCommon } from "@/types/urlTypes";

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

  return <UrlGrid urls={urls} />;
}

export default SimilarUrlGrid;
