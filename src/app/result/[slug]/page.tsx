import Footer from "@/components/common/Footer";
import { ResultExtended } from "@/types/urlTypes";
import { getResult } from "@/services/linkscopeApi";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import { FaCheck, FaChevronRight, FaX } from "react-icons/fa6";
import { capitalizeFirstChar } from "@/utils/formattor";
import lookup from "country-code-lookup";
import { featureInformation } from "@/constants/feature";
import Link from "next/link";

async function ScanResultPage({ params }: { params: { slug: string } }) {
  const resultId = parseInt(params.slug);

  const result: ResultExtended | null = await getResult(resultId);

  if (!result) throw new Error(`Failed to fetch result for ${params.slug}`);

  const featureItem: Record<string, any> = result.feature;

  const verdictMappings: Record<string, { label: string; color: string }> = {
    UNKNOWN: { label: "Unknown", color: "bg-gray-500" },
    VERY_LOW: { label: "Safe", color: "bg-lime-500" },
    LOW: { label: "Safe", color: "bg-lime-500" },
    MEDIUM: { label: "Moderate", color: "bg-amber-500" },
    HIGH: { label: "Suspecious", color: "bg-orange-500" },
    VERY_HIGH: { label: "Malicious", color: "bg-red-500" },
    //-------------------------------------------------------------------
    unknown: { label: "Unknown", color: "bg-gray-500" },
    safe: { label: "Safe", color: "bg-status-success" },
    suspicious: { label: "Suspicious", color: "bg-status-caution" },
    malicious: { label: "Malicious", color: "bg-status-warning" },
  };

  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-semibold mb-1 truncate">
          {result.submittedUrl}
        </h1>
        <p className="text-gray-700 truncate">
          <strong>Redirected to: </strong>
          {result.url.finalUrl}
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mt-4">
        <div
          className={`px-4 py-2 text-center rounded-full
                    ${
                      result.verdict && result.verdict in verdictMappings
                        ? verdictMappings[result.verdict].color
                        : "bg-black"
                    }
                    `}
        >
          <p className="text-white text-sm font-normal">
            {result.verdict && result.verdict in verdictMappings
              ? verdictMappings[result.verdict].label
              : result.verdict}
          </p>
        </div>

        <div
          className={`flex items-center gap-2 px-4 py-2 text-center rounded-full text-white
                        ${
                          !result.url.googleSafeBrowsing
                            ? "bg-status-passive"
                            : "bg-status-caution"
                        }
                        `}
        >
          <p className="text-sm font-normal">Google Safe Browsing</p>
          {!result.url.googleSafeBrowsing ? <FaCheck /> : <FaX />}
        </div>

        <div className="flex items-center gap-2 px-4 py-2 text-center border rounded-full">
          <p className="text-gray-500 text-sm truncate">
            {result.datetimeCreated.toDateString()}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p>
          {`The website's domain name is managed by`}
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
          {` Our model has classified this URL as "${result.verdict}," with a trust score of`}
          <strong> {result.trustScore} out of 5.</strong>
          {` Additionally, Google Safe Browsing has classified the URL as `}
          <strong>
            {result.url.googleSafeBrowsing ? "malicious." : "safe."}
          </strong>
        </p>
      </div>

      <div className="mt-8">
        <div className="border-t border-x rounded-t-lg px-4 py-2 bg-gray-100">
          <h2 className="text-gray-700 font-semibold">Model Result</h2>
        </div>

        <div className="p-4 border rounded-b-lg">
          <Link href={`/url/${result.url.urlId}`}>
            <div className=" flex items-center gap-8 p-4 border rounded hover:bg-gray-200 transition-colors">
              <div className="grow truncate">
                <p className="text-sm text-gray-700 font-medium mb-1">
                  URL Scanned
                </p>
                <h3 className="text-lg font-semibold truncate">
                  {result.url.finalUrl}
                </h3>
                <p className="text-gray-500">{result.url.ipAddress}</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="hidden sm:block text-sm text-gray-500">
                  More Details
                </p>
                <FaChevronRight className="w-7 h-7 fill-gray-400 shrink-0" />
              </div>
            </div>
          </Link>

          <ul className="flex flex-wrap gap-x-12 gap-y-4 p-4 mt-4 rounded bg-gray-100">
            <li>
              <p className="text-sm text-gray-500">Probability:</p>
              <p>{result.phishProb}%</p>
            </li>
            <li>
              <p className="text-sm text-gray-500">Verdict:</p>
              <p>{result.verdict}</p>
            </li>
            <li>
              <p className="text-sm text-gray-500">Trust Score:</p>
              <p>{result.trustScore}</p>
            </li>
            <li>
              <p className="text-sm text-gray-500">Date & Time Created:</p>
              <p>{result.datetimeCreated.toString()}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <div className="border-t border-x rounded-t-lg px-4 py-2 bg-gray-100">
          <h2 className="text-gray-700 font-semibold">Extracted Features</h2>
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
                                  "border-primary-400 text-primary-700"
                                }
                                ${
                                  featureInfo.featureTypes ==
                                    "HTML/DOM Structure" &&
                                  "border-lime-400 text-lime-700"
                                }
                                ${
                                  featureInfo.featureTypes == "Abnormal" &&
                                  "border-amber-400 text-amber-700"
                                }
                                ${
                                  featureInfo.featureTypes == "Domain" &&
                                  "border-red-400 text-red-700"
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
                  className={`flex items-center justify-center shrink-0 w-14 bg-gray-100 rounded`}
                >
                  {featureItem[featureName] != null
                    ? featureItem[featureName].toString()
                    : "-"}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <Footer />
    </MainWrapper>
  );
}

export default ScanResultPage;
