import { featureInformation } from "@/constants/feature";
import React from "react";

const URLScanResultPage = () => {
  const data = {
    modelResults: {
      verdict: 1,
      probabilityOfPhishUrl: 98.21,
    },
    urlDetails: {
      actualUrl: "https://www.example.com",
    },
    extractedFeatures: {
      domainLength: 12.0,
      hasWwwSubdomain: false,
      hasMultipleSubdomains: false,
      usesHttps: true,
      usesHttp: false,
      isShortUrl: false,
      containsIpAddress: false,
      atCount: 2,
      hyphenCount: 1,
      equalCount: 0,
      dotCount: 2,
      underscoreCount: 0,
      slashCount: 1,
      digitCount: 3,
      containsLogWord: false,
      containsPayWord: true,
      containsWebWord: true,
      containsCmdWord: false,
      containsAccountWord: false,
      percentageEmptyLinks: 10.5,
      percentageExternalLinks: 25.0,
      percentageExternalResourcesUrl: 30.0,
      hasZeroLink: false,
      hasDifferentFaviconDomain: true,
      hasSubmitToEmail: false,
      isSfh: true,
      hasRedirection: true,
      isDomainAgeLessThan6Months: false,
      isDomainEndLessThanOrEqual1Year: true,
    },
  };

  return (
    <div className="flex flex-col flex-auto gap-4 p-8 self-center w-full max-w-6xl bg-white">
      <h1 className="text-3xl font-bold mb-4">URL Scan Result Report</h1>

      {/* Section: Model Results */}
      <section className="flex flex-col gap-4 border rounded-xl bg-gray-50 p-4">
        <div
          className={`text-white p-4 border rounded-lg ${
            data.modelResults.verdict === 1 ? " bg-red-500" : " bg-green-500"
          }`}
        >
          <h2 className="text-2xl font-bold mb-2">Model Results</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Classification:</strong>
                {data.modelResults.verdict === 1 ? " Phishing" : " Safe"}
              </p>
              <p className="text-sm">
                The URL is classified as
                {data.modelResults.verdict === 1 ? " phishing" : " safe"}.
              </p>
            </div>
            <div>
              <p>
                <strong>Phishing Probability:</strong>
                {` ${data.modelResults.probabilityOfPhishUrl}`}%
              </p>
              <p className="text-sm">
                The probability of the URL being a phishing site.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 border rounded-lg white">
          <h2 className="text-2xl font-bold mb-2">URL Details</h2>
          <p>
            <strong>Actual URL:</strong> {data.urlDetails.actualUrl}
          </p>
          <p className="text-sm text-gray-600">
            The URL submitted for scanning.
          </p>
        </div>
      </section>

      {/* Section: Extracted Features */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Extracted Features</h2>
          <p>
            Extracted features provide valuable insights into the
            characteristics and behavior of URLs, allowing machine learning
            models to distinguish between legitimate and phishing URLs with
            greater accuracy. By analyzing these features, ML algorithms can
            identify patterns and anomalies associated with phishing activities.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border">
          <table>
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Explanation</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {/* Feature rows */}
              {Object.entries(data.extractedFeatures).map((feature, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 font-medium bg-gray-100">
                    {featureInformation[feature[0]].featureName}
                  </td>
                  <td className="px-4 py-2 font-medium bg-gray-50 text-center">
                    {feature[1].toString()}
                  </td>
                  <td className="px-4 py-2 bg-white">
                    {featureInformation[feature[0]].explanation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default URLScanResultPage;
