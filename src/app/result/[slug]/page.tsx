import Link from "next/link";
import lookup from "country-code-lookup";
import { notFound } from "next/navigation";
import { FaCheck, FaChevronRight, FaX } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import VerdictDisplay from "@/components/search/VerdictDisplay";
import { ResultExtended } from "@/types/urlTypes";
import { getResult } from "@/services/linkscopeApi";
import { featureInformation } from "@/constants/feature";
import { calculateTrustScore, calculateVerdict } from "@/utils/formattor";
import { verdictMappings } from "@/constants/result";
import InfoBox from "@/components/search/InfoBox";

async function ScanResultPage({ params }: { params: { slug: string } }) {
  const resultId = parseInt(params.slug);

  const result: ResultExtended | null = await getResult(resultId);

  if (!result) return notFound();

  const featureItem: Record<string, any> = result.feature;
  const verdict = result.hasSoup
    ? calculateVerdict(result.phishProbMod)
    : "UNKNOWN";
  const trustScore = result.hasSoup
    ? calculateTrustScore(result.phishProbMod)
    : "-";

  const modelResultItems = [
    {
      title: "Model Probability",
      value: `${Math.round(result.phishProb * 100)}%`,
      hint: "The likelihood that the given URL is classified as phishing based on the features analyzed by the model. A higher percentage suggests a stronger indication of phishing.",
    },
    {
      title: "Verdict",
      value: verdictMappings[verdict]?.label ?? "Unavailable",
      hint: "The verdict is based on the threshold set by the model; if the model probability is below a certain threshold, the verdict will be 'safe,' indicating that the URL is not considered a phishing threat.",
    },
    {
      title: "Trust Score",
      value: `${trustScore} out of 5`,
      hint: "The level of confidence users can have in the model's prediction. A higher trust score indicates a stronger confidence level in the model's accuracy.",
    },
  ];

  return (
    <MainWrapper>
      <header>
        <h1 className="font-semibold mb-1">Result</h1>
        <p className="text-gray-500 font-extralight">
          Scan result of &apos;{result.submittedUrl}&apos;
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mt-4">
        <VerdictDisplay verdict={verdict} />
        <div
          className={`flex items-center gap-2 px-4 py-2 text-center rounded-full text-white
                      ${
                        !result.url.googleIsMalicious
                          ? "bg-status-passive"
                          : "bg-status-caution"
                      }
                      `}
        >
          <p className="text-sm font-normal">Google Safe Browsing</p>
          {!result.url.googleIsMalicious ? <FaCheck /> : <FaX />}
        </div>

        <div className="flex items-center gap-2 px-4 py-2 text-center border rounded-full">
          <p className="text-gray-500 text-sm truncate">
            {result.datetimeCreated.toDateString()}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="rounded-lg">
          <Link href={`/url/${result.url.urlId}`}>
            <div
              className=" flex items-center gap-8 p-4 rounded-lg border 
                        border-primary hover:bg-primary-100 hover:dark:bg-primary-900 
                        transition-colors"
            >
              <div className="grow truncate">
                <p className="text-sm font-medium mb-1">URL Scanned</p>
                <h3 className="text-xl text-primary font-semibold truncate">
                  {result.url.finalUrl}
                </h3>
                <p>{result.url.ipAddress}</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="hidden sm:block text-sm text-primary">
                  More Details
                </p>
                <FaChevronRight className="w-7 h-7 fill-primary shrink-0" />
              </div>
            </div>
          </Link>

          <ul className="flex flex-wrap gap-4 mt-4">
            {modelResultItems.map((item, index) => (
              <li key={index} className="flex-auto">
                <InfoBox
                  title={item.title}
                  value={item.value}
                  hint={item.hint}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="mt-4">
          The website&apos;s domain name is managed by
          <strong>
            {` ${result.url.registrar}. ` ?? " an unknown registrar. "}
          </strong>
          The main IP address is
          <strong> {result.url.ipAddress ?? "unknown"}</strong>
          {result.url.country
            ? `, located in ${lookup.byIso(result.url.country)?.country}.`
            : `.`}
          {(result.url.creationDate || result.url.expirationDate) &&
            ` The website's SSL certificate `}
          {result.url.creationDate &&
            `was issued on ${result.url.creationDate.toLocaleString()}`}
          {result.url.creationDate && result.url.expirationDate && ` and `}
          {result.url.expirationDate &&
            `is valid until ${result.url.expirationDate.toLocaleString()}.`}
        </p>
        <p className="mt-4">
          {` Our model has classified this URL as "${verdictMappings[verdict].label}," with a trust score of`}
          <strong> {trustScore} out of 5.</strong>
          {` Additionally, Google Safe Browsing has classified the URL as `}
          <strong>
            {result.url.googleIsMalicious ? "malicious." : "safe."}
          </strong>
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Extracted Features</h2>

        <p className="mt-4">
          Specific components or attributes that make up the URL&apos;s
          structure. Each of these features plays a role in determining the
          destination and behavior of the URL when accessed by a web browser or
          other client.{" "}
        </p>

        <section>
          <div className="mt-8 border border-b-0 rounded-t-lg px-4 py-2 bg-gray-100 dark:bg-gray-900">
            <p className="font-semibold">Extracted Features</p>
          </div>

          <div className="border rounded-b-lg divide-y divide">
            {Object.entries(featureInformation).map(
              ([featureName, featureInfo], index) => (
                <div
                  key={index}
                  className="flex items-stretch justify-between gap-4 p-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{featureInfo.featureName}</p>
                      <p
                        className={`hidden sm:block text-xs p-1 px-2 rounded-full border
                                ${
                                  featureInfo.featureTypes == "Address Bar" &&
                                  "border-primary-500 text-primary-500"
                                }
                                ${
                                  featureInfo.featureTypes ==
                                    "HTML/DOM Structure" &&
                                  "border-lime-500 text-lime-500"
                                }
                                ${
                                  featureInfo.featureTypes == "Abnormal" &&
                                  "border-amber-500 text-amber-500"
                                }
                                ${
                                  featureInfo.featureTypes == "Domain" &&
                                  "border-red-500 text-red-500"
                                }`}
                      >
                        {featureInfo.featureTypes}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 whitespace-pre-wrap">
                      {featureInfo.explanation}
                    </p>
                  </div>
                  <div
                    className={`flex items-center justify-center shrink-0 w-14 bg-gray-100 dark:bg-gray-900 rounded`}
                  >
                    {featureItem[featureName] != null
                      ? featureItem[featureName].toString()
                      : "-"}
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>

      <Footer />
    </MainWrapper>
  );
}

export default ScanResultPage;
