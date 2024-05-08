import MainWrapper from "@/components/common/wrapper/MainWrapper";
import TextCopyWrapper from "@/components/common/wrapper/TextCopyWrapper";
import ResultList from "@/components/search/ResultList";
import UrlInfo from "@/components/url/UrlInfo";
import { getUrl } from "@/services/linkscopeApi";
import { Url, UrlExtended } from "@/types/urlTypes";
import React from "react";

async function UrlPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const urlId = parseInt(params.slug);
  const pageNumber = parseInt((searchParams["page"] as string) ?? 1);

  const url: UrlExtended | null = await getUrl(urlId);

  if (!url) throw new Error(`Failed to fetch result for ${params.slug}`);

  const itemsPerPage = 10;
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = pageNumber * itemsPerPage;

  const resultsPerPage = url.results
    .map((result) => ({ ...result, url: url }))
    .slice(startIndex, endIndex);

  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-semibold mb-1">URL INFORMATION</h1>
        <p className="text-gray-500 font-extralight">
          Details and historical records.
        </p>
      </header>

      <section className="mt-6">
        <UrlInfo url={url} />
      </section>

      <section className="mt-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Scan Result History</h2>
          {/* <p className="">
            Details and historical records.
          </p> */}
        </div>

        <ResultList
          results={resultsPerPage}
        />
      </section>
    </MainWrapper>
  );
}

export default UrlPage;
