import MainWrapper from "@/components/common/wrapper/MainWrapper";
import ResultListFallback from "@/components/result/ResultListFallback";
import UrlInfo from "@/components/url/UrlInfo";
import { getUrl } from "@/services/linkscopeApi";
import { UrlExtended } from "@/types/urlTypes";
import React, { Suspense } from "react";
import UrlResultList from "@/components/url/UrlResultList";
import UrlGrid from "@/components/url/UrlGrid";
import SimilarUrlGrid from "@/components/url/SimilarUrlGrid";
import UrlGridFallback from "@/components/url/UrlGridFallback";
import Footer from "@/components/common/Footer";

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

      <section className="mt-8">
        <UrlInfo url={url} />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Similar URLs</h2>
        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate mb-6">
          Top 4 most similar URLs based on their textual content.
        </p>

        <Suspense fallback={<UrlGridFallback pageSize={4} />}>
          <SimilarUrlGrid urlId={url.urlId} />
        </Suspense>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Scan Result History</h2>

        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate mb-6">
          A historical records of previous scans of this URL.
        </p>

        {/* TODO: Fetch results separately from URL info to improve pagination efficiency*/}
        <Suspense
          key={pageNumber}
          fallback={<ResultListFallback pageSize={1} />}
        >
          <UrlResultList url={url} pageNumber={pageNumber} />
        </Suspense>
      </section>

      <Footer />
    </MainWrapper>
  );
}

export default UrlPage;
