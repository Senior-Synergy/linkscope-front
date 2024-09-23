import Link from "next/link";
import lookup from "country-code-lookup";
import { notFound } from "next/navigation";
import { FaArrowDown, FaCheck, FaChevronRight, FaX } from "react-icons/fa6";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import VerdictDisplay from "@/components/result/VerdictDisplay";
import InfoBox from "@/components/result/InfoBox";
import ExtractedFeaturesList from "@/components/result/ExtractedFeaturesList";

import { ResultExtended } from "@/types/urlTypes";
import { getResult } from "@/services/linkscopeApi";
import {
  calculateTrustScore,
  calculateVerdict,
  removeTrailingDot,
} from "@/utils/formattor";
import { Suspense } from "react";
import UrlGridFallback from "@/components/url/UrlGridFallback";
import SimilarUrlGrid from "@/components/url/SimilarUrlGrid";

async function ScanResultPage({
  params: { locale, slug },
}: {
  params: { slug: string; locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t_url = await getTranslations("UrlInfo");
  const t_result = await getTranslations("Result");
  const t_feature = await getTranslations("Feature");
  const t_verdict = await getTranslations("Verdict");

  const resultId = parseInt(slug);
  const result: ResultExtended | null = await getResult(resultId);

  if (!result) return notFound();

  const verdictValue = calculateVerdict(
    result.phishProb,
    result.hasSoup ?? false
  );

  let verdict;

  switch (verdictValue) {
    case "UNKNOWN":
      verdict = t_verdict("inconclusive");
      break;
    case "VERY_LOW":
      verdict = t_verdict("safe");
      break;
    case "LOW":
      verdict = t_verdict("safe");
      break;
    case "MEDIUM":
      verdict = t_verdict("moderate");
      break;
    case "HIGH":
      verdict = t_verdict("suspicious");
      break;
    case "VERY_HIGH":
      verdict = t_verdict("malicious");
      break;
    default:
      verdict = t_verdict("inconclusive");
      break;
  }

  const trustScore = result.hasSoup
    ? calculateTrustScore(result.phishProb)
    : "-";

  const modelResultItems = [
    {
      title: t_result("info-box.phish-prob.title"),
      value:
        verdictValue == "UNKNOWN"
          ? `-`
          : `${Math.round(result.phishProb * 100)}%`,
      hint: t_result("info-box.phish-prob.desc"),
    },
    {
      title: t_result("info-box.verdict.title"),
      value: verdict ?? t_verdict("unavailable"),
      hint: t_result("info-box.verdict.desc"),
    },
    // {
    //   title: t_result("info-box.trust-score.title"),
    //   value: `${trustScore} ${t_result("out-of")} 5`,
    //   hint: t_result("info-box.trust-score.desc"),
    // },
  ];

  return (
    <MainWrapper>
      <header>
        <h1 className="font-semibold mb-1">{t_result("result")}</h1>
        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate">
          {t_result("scan-result-of")}&nbsp;&apos;{result.submittedUrl}&apos;
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mt-4">
        <VerdictDisplay
          phishProb={result.phishProb}
          hasSoup={result.hasSoup ?? false}
        />

        {/* <div
          className={`flex items-center gap-2 px-4 py-2 text-center rounded-full text-white
                    ${
                      !result.url.googleIsMalicious
                        ? "bg-status-passive"
                        : "bg-status-caution"
                    }
                    `}
        >
          <p className="text-sm font-normal">{t_result("google-safe")}</p>
          {!result.url.googleIsMalicious ? <FaCheck /> : <FaX />}
        </div> */}

        <div className="flex items-center gap-2 px-4 py-2 text-center border rounded-full bg-white dark:bg-black">
          <p className="text-gray-500 text-sm truncate">
            {result.datetimeCreated.toLocaleString()}
          </p>
        </div>
      </div>

      {/* <TabSelector
        itemList={[{ title: "test", value: "test-1" }]}
        currentValue={"test-1"}
        onSelect={() => console.log()}
      /> */}

      <section className="mt-8 p-4 border rounded-lg bg-white dark:bg-black">
        {/* <ResultInfo /> */}

        <div>
          <h2 className="text-xl font-semibold">{t_result("summary.title")}</h2>

          <p className="mt-4">
            <span>
              {t_result("summary.body-info-1.1")}&nbsp;
              <strong>
                {removeTrailingDot(result.url.registrar) ??
                  "an unknown registrar."}
              </strong>
              .&nbsp;
            </span>
            <span>
              {t_result("summary.body-info-1.2")}&nbsp;
              <strong>{result.url.ipAddress ?? "unknown"}</strong>
              .&nbsp;
            </span>
            <span>
              {t_result("summary.body-info-1.3")}&nbsp;
              <strong>
                {result.url.country
                  ? lookup.byIso(result.url.country)?.country ??
                    result.url.country
                  : t_result("summary.unknown-location")}
              </strong>
              .&nbsp;
            </span>
            <span>
              {t_result("summary.body-info-2.1")}&nbsp;&quot;
              <strong>{verdict}</strong>.&quot;&nbsp;
              {/* {t_result("summary.body-info-2.2")}&nbsp;
              {trustScore} {t_result("out-of")} 5.&nbsp; */}
            </span>
          </p>

          {/* <p className="mt-4">
            <span>
              {t_result("summary.body-info-2.1")}&nbsp;&quot;
              <strong>{verdict}</strong>&quot;&nbsp;
              {t_result("summary.body-info-2.2")}&nbsp;
              {trustScore} {t_result("out-of")} 5.&nbsp;
            </span>
            <span>
              {t_result("summary.body-info-2.3")}&nbsp;
              <strong>
                &quot;
                {result.url.googleIsMalicious
                  ? t_result("summary.malicious")
                  : t_result("summary.not-malicious")}
                .&quot;
              </strong>
            </span>
          </p> */}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {modelResultItems.map((item, index) => (
            <li key={index} className="flex-auto">
              <InfoBox title={item.title} value={item.value} hint={item.hint} />
            </li>
          ))}
        </ul>
      </section>

      {/* <div className="mt-8 p-4 border rounded-lg bg-white dark:bg-black">
        <div>
          <h2 className="text-xl font-semibold">{t_result("summary.title")}</h2>
        </div>
      </div> */}

      <section className="mt-8">
        <div className="p-4 border rounded-xl mt-4 bg-white dark:bg-black">
          <h2 className="text-xl font-semibold">
            {t_url("url-details.title")}
          </h2>

          <div className="p-4 mt-4 rounded-lg bg-primary">
            <p className="text-white truncate">
              <strong>{t_result("url-submitted")}:</strong>
              &nbsp;{result.submittedUrl}
            </p>
          </div>

          <div className="w-full my-2">
            <FaArrowDown className="shrink-0 m-auto h-6 w-6 fill-primary" />
          </div>

          <Link href={`/url/${result.url.urlId}`}>
            <div
              className="flex items-center gap-4 p-4 rounded-lg border-2 
                        border-primary bg-primary-50 hover:bg-primary-100 
                        dark:bg-primary-950 hover:dark:bg-primary-900 
                        transition-colors"
            >
              <div className="grow truncate">
                <p className="text-sm font-medium mb-1">
                  {t_result("redirected-to")}:
                </p>
                <h3 className="text-xl text-primary font-semibold truncate">
                  {result.url.finalUrl}
                </h3>
                <p>{result.url.ipAddress}</p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <p className="hidden sm:block text-sm text-primary">
                  {t_result("more-details")}
                </p>
                <FaChevronRight className="w-7 h-7 fill-primary shrink-0" />
              </div>
            </div>
          </Link>

          <div className="mt-6">
            <h3 className="my-4">{t_url("similar-url.title")}</h3>

            <Suspense fallback={<UrlGridFallback pageSize={4} />}>
              <SimilarUrlGrid urlId={result.url.urlId} />
            </Suspense>
          </div>
        </div>
      </section>

      <hr className="my-12" />

      <section className="mt-8">
        <h2 className="text-xl font-semibold">
          {t_feature("extracted-features.title")}
        </h2>

        <p className="mt-4">{t_feature("extracted-features.body")}</p>

        <ExtractedFeaturesList features={result.feature} />
      </section>

      <Footer />
    </MainWrapper>
  );
}

export default ScanResultPage;
