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

      {/* <section className="mt-6">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <p>
          All requested URLs has been successfully analyzed. A total of
          <span className="font-semibold"> {results.length} </span>
          URL(s) has been scanned.
          <span className="font-semibold"> {safeItems.length} </span> are
          identified as safe, while
          <span className="font-semibold"> {unsafeItems.length} </span>are
          identified potentially unsafe URLs.
        </p>
      </section> */}

      {/* <div className="flex flex-col sm:flex-row mt-8">
        <div className="flex flex-col w-full sm:w-1/2">
          <div className="bg-green-400 p-4 rounded-t-lg">
            <p className="text-white">
              Classifed as<span className="font-semibold"> Safe</span>
            </p>
          </div>
          <ul className="flex flex-col grow gap-2 p-2 bg-white border border-t-0 rounded-b-lg">
            {safeItems.map((result, index) => (
              <Link key={index} href={`/result/${result.resultId}`}>
                <li className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50 hover:bg-gray-200 transition-colors">
                  <p className="grow truncate">{result.submittedUrl}</p>
                  <FaChevronRight className="w-5 h-5 fill-gray-400 shrink-0" />
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col w-full sm:w-1/2">
          <div className="bg-green-400 p-4 rounded-t-lg">
            <p className="text-white">
              Classifed as<span className="font-semibold"> Safe</span>
            </p>
          </div>
          <ul className="flex flex-col grow gap-2 p-2 bg-white border border-t-0 rounded-b-lg">
            {safeItems.map((result, index) => (
              <Link key={index} href={`/result/${result.resultId}`}>
                <li className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50 hover:bg-gray-200 transition-colors">
                  <p className="grow truncate">{result.submittedUrl}</p>
                  <FaChevronRight className="w-5 h-5 fill-gray-400 shrink-0" />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div> */}

      {/* <div className="mt-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Result Information</h2>
          <p className="text-gray-600">
            Information about the results in this submission.
          </p>
        </div>

        <DetailedUrlList results={results} />
      </div> */}

      <section className="mt-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">{t("results")}</h2>
        </div>

        <ResultList results={results} />
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
