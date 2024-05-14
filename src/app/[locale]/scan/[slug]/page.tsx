import { redirect } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

import { Result } from "@/types/urlTypes";
import { getSubmissionResults } from "@/services/linkscopeApi";
import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import ResultList from "@/components/result/ResultList";
import RecentResultList from "@/components/result/RecentResultList";
import ResultListFallback from "@/components/result/ResultListFallback";
import UrlGrid from "@/components/url/UrlGrid";

async function ScanResultPage({
  params: { locale, slug },
}: {
  params: { slug: string; locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("Submission");

  const submissionID = parseInt(slug);
  const submission = await getSubmissionResults(submissionID);

  if (!submission) {
    throw new Error(`Failed to fetch submission for ${slug}`);
  }

  if (submission.results.length == 1) {
    redirect(`/result/${submission.results[0].resultId}`);
  }

  const results: Result[] = submission ? submission.results : [];

  // const safeItems = results.filter((result) => result.phishProb > 0.7);
  // const unsafeItems = results.filter((result) => result.phishProb < 0.7);

  return (
    <MainWrapper>
      <header>
        <h1 className="font-semibold mb-1">{t("header.title")}</h1>
        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate">
          {t("header.subtitle")}
        </p>
      </header>

      <section className="mt-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">{t("results")}</h2>
        </div>

        <ResultList results={results} />
      </section>

      {/* <hr className="my-12" /> */}

      <section className="mt-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">{t("url-associated")}</h2>
        </div>

        <UrlGrid urls={results.map((result) => result.url)} />
      </section>

      <hr className="my-12" />

      <section className="mt-8">
        <h2 className="text-xl font-bold">{t("recent-results.title")}</h2>

        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate mb-6">
          {t("recent-results.subtitle")}
        </p>

        <Suspense fallback={<ResultListFallback pageSize={5} />}>
          <RecentResultList />
        </Suspense>
      </section>

      <Footer />
    </MainWrapper>
  );
}

export default ScanResultPage;
