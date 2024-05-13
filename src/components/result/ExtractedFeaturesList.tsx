import { FeatureCommon } from "@/types/urlTypes";

interface ExtractedFeaturesListProps {
  features: FeatureCommon;
}

function ExtractedFeaturesList({ features }: ExtractedFeaturesListProps) {
  const featureItems = [
    {
      name: "domainLength",
      title: "Domain Length",
      type: "Address Bar",
      explanation: "Count the characters in the hostname string.",
      note: "",
      value: features.domainLength,
    },
    {
      name: "www",
      title: "WWW",
      type: "Address Bar",
      explanation:
        "If the URL has 'www' as the subdomain, then true; otherwise, false.",
      note: "",
      value: features.www?.toString(),
    },
    {
      name: "https",
      title: "HTTPS",
      type: "Address Bar",
      explanation:
        "Address Bar based If the URL contains 'https', then true; otherwise, false.",
      note: "",
      value: features.https?.toString(),
    },
    {
      name: "shortUrl",
      title: "Short URL",
      type: "Address Bar",
      explanation: "If the URL is a short URL, false; otherwise, true.",
      note: "",
      value: features.shortUrl?.toString(),
    },
    {
      name: "ip",
      title: "IP",
      type: "Address Bar",
      explanation:
        "If the URL contains an 'IP address', false; otherwise, true.",
      note: "",
      value: features.ip?.toString(),
    },
    {
      name: "dashCount",
      title: "Dash Symbol Counts",
      type: "Address Bar",
      explanation: "Count the '-' characters in the URL.",
      note: "",
      value: features.dashCount,
    },
    {
      name: "equalCount",
      title: "Equal Symbol Counts",
      type: "Address Bar",
      explanation: "Count the '=' characters in the URL.",
      note: "",
      value: features.equalCount,
    },
    {
      name: "dotCount",
      title: "Dot Symbol Counts",
      type: "Address Bar",
      explanation: "Count the '.' characters in the URL's hostname.",
      note: "",
      value: features.dotCount,
    },
    {
      name: "underscoreCount",
      title: "Underscore Symbol Counts",
      type: "Address Bar",
      explanation: "Count the '_' characters in the URL.",
      note: "",
      value: features.underscoreCount,
    },
    {
      name: "slashCount",
      title: "Slash Symbol Counts",
      type: "Address Bar",
      explanation: "Count the '/' characters in the URL.",
      note: "",
      value: features.slashCount,
    },
    {
      name: "digitCount",
      title: "Digit",
      type: "Address Bar",
      explanation: "Count the digit (0-9) characters in the URL.",
      note: "",
      value: features.digitCount,
    },
    {
      name: "pcemptylinks",
      title: "PC Empty Links",
      type: "HTML/DOM Structure",
      explanation: "Percentage of empty links.",
      note: "An empty link is a hyperlink that does not lead to a different web page. When clicked, it typically results in staying on the current page or displaying a blank page. This can occur when the link's URL is missing or invalid.",
      value: features.pcEmptylink
        ? `${Math.round(features.pcEmptylink)}%`
        : null,
    },
    {
      name: "pcextlinks",
      title: "PC External Links",
      type: "HTML/DOM Structure",
      explanation:
        "Percentage of external links that direct you to another site with a different domain from the submitted URL.",
      note: "Note : An external link is a hyperlink that directs users from one website to a different website with a different domain. When clicked, the link takes the user away from the current site and navigates them to a new site.",
      value: features.pcExtlink ? `${Math.round(features.pcExtlink)}%` : null,
    },
    {
      name: "pcrequrl",
      title: "PC External Resources URL",
      type: "HTML/DOM Structure",
      explanation: "Percentage of external resource URLs.",
      note: "Note: An external resource URL refers to the web address of a resource, such as images, audio files, or embedded content, that is hosted on a different domain from the main or submitted URL.",
      value: features.pcRequrl ? `${Math.round(features.pcRequrl)}%` : null,
    },
    {
      name: "zerolink",
      title: "Zero Link",
      type: "HTML/DOM Structure",
      explanation:
        "If the favicon URL is from a different domain than the submitted URL, false; otherwise, true.",
      note: "",
      value: features.zerolink?.toString(),
    },
    {
      name: "extFavicon",
      title: "External Favicon",
      type: "HTML/DOM Structure",
      explanation:
        "If the favicon URL is from a different domain than the submitted URL, false; otherwise, true.",
      note: "",
      value: features.extFavicon?.toString(),
    },
    {
      name: "sfh",
      title: "SFH",
      type: "HTML/DOM Structure",
      explanation:
        "SFHs (server-side form handlers) that contain an empty string or lead to different domain sites from the submitted URL should false; otherwise, true.",
      note: "Note: SFH stands for server-side form handler, which is the URL specified in the `action` attribute of an HTML form. This URL determines where the form data will be submitted for processing when a user fills out and submits the form.",
      value: features.sfh?.toString(),
    },
    {
      name: "redirection",
      title: "Redirection",
      type: "Abnormal",
      explanation:
        "If clicking the submitted URL results in a redirection to another URL, false; otherwise, true. For example, clicking www.eabc1255.com and being redirected to www.eabc5255.com.",
      note: "",
      value: features.redirection?.toString(),
    },
    {
      name: "domainend",
      title: "Domain End",
      type: "Domain",
      explanation:
        "Calculate the difference in days between the current date and the expiration date (registration length). If the difference is less than or equal to one year, false; otherwise, true.",
      note: "",
      value: features.domainEnd?.toString(),
    },
  ];

  return (
    <section>
      <div className="mt-8 border border-b-0 rounded-t-lg px-4 py-2 bg-gray-100 dark:bg-gray-900">
        <p className="font-semibold">Extracted Features</p>
      </div>

      <div className="border rounded-b-lg divide-y divide">
        {featureItems.map((item, index) => (
          <div
            key={index}
            className="flex items-stretch justify-between gap-4 p-4"
          >
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{item.title}</p>
                <p
                  className={`hidden sm:block text-xs p-1 px-2 rounded-full border
                            ${
                              item.type == "Address Bar" &&
                              "border-primary-500 text-primary-500"
                            }
                            ${
                              item.type == "HTML/DOM Structure" &&
                              "border-lime-500 text-lime-500"
                            }
                            ${
                              item.type == "Abnormal" &&
                              "border-amber-500 text-amber-500"
                            }
                            ${
                              item.type == "Domain" &&
                              "border-red-500 text-red-500"
                            }`}
                >
                  {item.type}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-2 whitespace-pre-wrap">
                {item.explanation}
              </p>
            </div>
            <div
              className={`flex items-center justify-center shrink-0 w-14 bg-gray-100 dark:bg-gray-900 rounded`}
            >
              {item.value ?? "-"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExtractedFeaturesList;
