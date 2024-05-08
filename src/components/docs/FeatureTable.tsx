function FeatureTable() {
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
      featureName: "ip",
      featureType: "Address Bar based",
      explanation:
        "If the URL contains an 'IP address', return 1; otherwise, return 0.",
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
      explanation: "Count the digit (0-9) characters in the URL..",
    },
    {
      featureName: "pcemptylinks",
      featureType: "HTML/DOM Structure based",
      explanation: "Percentage of empty links. (See note for definition)",
    },
    {
      featureName: "pcextlinks",
      featureType: "HTML/DOM Structure based",
      explanation:
        "Percentage of external links that direct you to another site with a different domain from the submitted URL. (See note for definition)",
    },
    {
      featureName: "pcrequrl",
      featureType: "HTML/DOM Structure based",
      explanation:
        "Percentage of external resource URLs. (See note for definition)",
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
      featureName: "sfh",
      featureType: "HTML/DOM Structure based",
      explanation:
        "SFHs (server-side form handlers) that contain an empty string or lead to different domain sites from the submitted URL should return 1; otherwise, return 0.",
    },
    {
      featureName: "redirection",
      featureType: "Abnormal Based",
      explanation:
        "If clicking the submitted URL results in a redirection to another URL, return 1; otherwise, return 0.",
    },
    {
      featureName: "domainend",
      featureType: "Domain Based",
      explanation:
        "Calculate the difference in days between the current date and the expiration date (registration length). If the difference is less than or equal to one year, return 1; otherwise, return 0.",
    },
  ];

  return (
    <div className="overflow-x-auto rounded-lg border">
      <table>
        <thead>
          <tr className="bg-gray-100 text-gray-700 border-b">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Explanation</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {/* Feature rows */}
          {featureData.map((feature, index) => (
            <tr key={index}>
              <td className="px-4 py-2 bg-white">
                {feature.featureName}
              </td>
              <td className="px-4 py-2 bg-gray-50 text-center">
                {feature.featureType}
              </td>
              <td className="px-4 py-2 bg-white text-center">
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
