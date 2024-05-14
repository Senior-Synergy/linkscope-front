import { Suspense } from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import MainWrapper from "@/components/common/wrapper/MainWrapper";
import ResultListFallback from "@/components/result/ResultListFallback";
import UrlInfo from "@/components/url/UrlInfo";
import UrlResultList from "@/components/url/UrlResultList";
import SimilarUrlGrid from "@/components/url/SimilarUrlGrid";
import UrlGridFallback from "@/components/url/UrlGridFallback";
import Footer from "@/components/common/Footer";

import { getUrl } from "@/services/linkscopeApi";
import { UrlExtended } from "@/types/urlTypes";

async function UrlPage({
  params: { locale, slug },
  searchParams,
}: {
  params: { slug: string; locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("UrlInfo");

  const urlId = parseInt(slug);
  const pageNumber = parseInt((searchParams["page"] as string) ?? 1);

  const url: UrlExtended | null = await getUrl(urlId);

  if (!url) throw new Error(`Failed to fetch result for ${slug}`);

  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-semibold mb-1">{t("header.title")}</h1>
        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate">
          {t("header.subtitle")}
        </p>
      </header>

      <section className="mt-8">
        <UrlInfo url={url} />
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">{t("similar-url.title")}</h2>
        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate mb-6">
          {t("similar-url.subtitle")}
        </p>

        <Suspense fallback={<UrlGridFallback pageSize={4} />}>
          <SimilarUrlGrid urlId={url.urlId} />
        </Suspense>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold">{t("scan-history.title")}</h2>

        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate mb-6">
          {t("scan-history.subtitle")}
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
