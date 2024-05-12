import MainWrapper from "@/components/common/wrapper/MainWrapper";
import TextCopyWrapper from "@/components/common/wrapper/TextCopyWrapper";
import ResultList from "@/components/search/ResultList";
import Paginator from "@/components/common/Paginator";
import ResultListFallback from "@/components/search/ResultListFallback";
import UrlInfo from "@/components/url/UrlInfo";
import { getUrl } from "@/services/linkscopeApi";
import { Url, UrlExtended } from "@/types/urlTypes";
import React, { Suspense } from "react";
import UrlResultList from "@/components/url/UrlResultList";

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

  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-semibold mb-1">URL Information</h1>
        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate">
          Details and historical records.
        </p>
      </header>

      <section className="mt-6">
        <UrlInfo url={url} />
      </section>

      <section></section>

      <section className="mt-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Scan Result History</h2>
        </div>

        {/* TODO: Fetch results separately from URL info to improve pagination efficiency*/}
        <Suspense
          key={pageNumber}
          fallback={<ResultListFallback pageSize={10} />}
        >
          <UrlResultList url={url} pageNumber={pageNumber} />
        </Suspense>
      </section>
    </MainWrapper>
  );
}

export default UrlPage;
