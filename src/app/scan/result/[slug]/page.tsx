import ResultChart from "@/components/result/ResultChart";
import ScanReportDisplay from "@/components/result/ScanReportDisplay";
import SummarizedReport from "@/components/result/SummarizedReport";

const ScanResultPage = ({ params }: { params: { slug: string } }) => {
  const scanId = params.slug;

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

  const results = [data, data, data];

  return (
    <div
      className="flex flex-col flex-auto self-center
                gap-8 p-4
                w-full max-w-6xl"
    >
      <header>
        <h1 className="text-3xl font-bold mb-4">URL Scan Result Report</h1>
        <p className="text-gray-600">Description to be added.</p>
        <p className="text-gray-600">Test Scan ID: {scanId}</p>
      </header>

      <div>
        <h2 className="text-xl font-bold mb-4">Summarized Report</h2>
        <SummarizedReport results={results} />
      </div>

      <div>
        <ScanReportDisplay results={results} />
      </div>

      {/* Section: Model Results */}
      {/* <section className="flex flex-col gap-4 border rounded-xl bg-gray-50 p-4">
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
      </section> */}
    </div>
  );
};

export default ScanResultPage;
