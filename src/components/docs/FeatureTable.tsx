const featureData = [
  {
    featureName: "domainlength",
    featureType: "Address Bar based",
    explanation: "Count the characters in the hostname string.",
  },
  {
    featureName: "www",
    featureType: "Address Bar based",
    explanation:
      "If the URL has 'www' as the subdomain, then return 0; otherwise, return 1.",
  },
  {
    featureName: "subdomain",
    featureType: "Address Bar based",
    explanation: "If the URL has more than 1 subdomain then return 1, else 0.",
  },
  {
    featureName: "https",
    featureType: "Address Bar based",
    explanation:
      "If the URL contains 'https', then return 0; otherwise, return 1.",
  },
  {
    featureName: "short_url",
    featureType: "Address Bar based",
    explanation: "If the URL is a short URL, return 1; otherwise, return 0.",
  },
  {
    featureName: "@",
    featureType: "Address Bar based",
    explanation: "Count the ‘@' characters in the URL.",
  },
  {
    featureName: "-",
    featureType: "Address Bar based",
    explanation: "Count the '-' characters in the URL.",
  },
  {
    featureName: "=",
    featureType: "Address Bar based",
    explanation: "Count the '=' characters in the URL.",
  },
  {
    featureName: ".",
    featureType: "Address Bar based",
    explanation: "Count the '.' characters in the URL's hostname.",
  },
  {
    featureName: "_",
    featureType: "Address Bar based",
    explanation: "Count the '_' characters in the URL.",
  },
  {
    featureName: "/",
    featureType: "Address Bar based",
    explanation: "Count the '/' characters in the URL.",
  },
  {
    featureName: "digit",
    featureType: "Address Bar based",
    explanation: "Count the digit (0-9) characters in the URL.",
  },
  {
    featureName: "log",
    featureType: "Address Bar based",
    explanation:
      "If the URL contains a 'log' word in the URL then return 0, else 1.",
  },
  {
    featureName: "pay",
    featureType: "Address Bar based",
    explanation:
      "If the URL contains a 'pay' word in the URL then return 0, else 1.",
  },
  {
    featureName: "web",
    featureType: "Address Bar based",
    explanation:
      "If the URL contains a 'web' word in the URL then return 0, else 1.",
  },
  {
    featureName: "account",
    featureType: "Address Bar based",
    explanation:
      "If the URL contains an 'account' word in the URL then return 0, else 1.",
  },
  {
    featureName: "pcemptylinks",
    featureType: "HTML/DOM Structure based",
    explanation:
      "Percentage of empty links. An empty link does not lead to a different page.",
  },
  {
    featureName: "pcextlinks",
    featureType: "HTML/DOM Structure based",
    explanation:
      "Percentage of external links that direct you to another site with a different domain.",
  },
  {
    featureName: "pcrequrl",
    featureType: "HTML/DOM Structure based",
    explanation:
      "Percentage of external resource URLs hosted on a different domain.",
  },
  {
    featureName: "zerolink",
    featureType: "HTML/DOM Structure based",
    explanation:
      "If the URL page has no links in the HTML body, return 1; otherwise, return 0.",
  },
  {
    featureName: "extfavicon",
    featureType: "HTML/DOM Structure based",
    explanation:
      "If the favicon URL is from a different domain than the submitted URL, return 1; otherwise, return 0.",
  },
  {
    featureName: "submit2Email",
    featureType: "HTML/DOM Structure based",
    explanation:
      'If the HTML page contains "\\b(mail()|mailto:?)\\b" then return 1, else 0.',
  },
  {
    featureName: "sfh",
    featureType: "HTML/DOM Structure based",
    explanation:
      "SFHs that contain an empty string or lead to different domain sites from the submitted URL should return 1; otherwise, return 0.",
  },
  {
    featureName: "redirection",
    featureType: "Abnormal Based",
    explanation:
      "If clicking the submitted URL results in a redirection to another URL, return 1; otherwise, return 0.",
  },
  {
    featureName: "domainage",
    featureType: "Domain Based",
    explanation:
      "If the domain age is less than 6 months, return 1; otherwise, return 0.",
  },
  {
    featureName: "domainend",
    featureType: "Domain Based",
    explanation:
      "If the difference in days between the current date and expiration date is less than or equal to one year, return 1; otherwise, return 0.",
  },
];

function FeatureTable() {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table>
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-200 border-b">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Explanation</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {/* Feature rows */}
          {featureData.map((feature, index) => (
            <tr key={index}>
              <td className="px-4 py-2 bg-white dark:bg-black">
                {feature.featureName}
              </td>
              <td className="px-4 py-2 bg-gray-50 dark:bg-gray-950 text-center">
                {feature.featureType}
              </td>
              <td className="px-4 py-2 bg-white dark:bg-black text-center">
                {feature.explanation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeatureTable;
