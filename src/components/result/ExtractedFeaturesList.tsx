import { FeatureCommon } from "@/types/urlTypes";
import { useTranslations } from "next-intl";

interface ExtractedFeaturesListProps {
  features: FeatureCommon;
}

function ExtractedFeaturesList({ features }: ExtractedFeaturesListProps) {
  const t_common = useTranslations("Common");
  const t = useTranslations("Feature.extracted-features");

  const featureItems = [
    {
      name: "domainLength",
      title: t("domain-length.title"),
      type: "Address Bar",
      explanation: t("domain-length.explanation"),
      note: "",
      value: features.domainLength,
    },
    {
      name: "www",
      title: t("www.title"),
      type: "Address Bar",
      explanation: t("www.explanation"),
      note: "",
      value:
        features.www != null
          ? features.www
            ? t_common("true")
            : t_common("false")
          : null,
    },
    {
      name: "https",
      title: t("https.title"),
      type: "Address Bar",
      explanation: t("https.explanation"),
      note: "",
      value:
        features.https != null
          ? features.https
            ? t_common("true")
            : t_common("false")
          : null,
    },
    {
      name: "shortUrl",
      title: t("short-url.title"),
      type: "Address Bar",
      explanation: t("short-url.explanation"),
      note: "",
      value:
        features.shortUrl != null
          ? features.shortUrl
            ? t_common("true")
            : t_common("false")
          : null,
    },
    {
      name: "ip",
      title: t("ip.title"),
      type: "Address Bar",
      explanation: t("ip.explanation"),
      value:
        features.ip != null
          ? features.ip
            ? t_common("true")
            : t_common("false")
          : null,
    },
    {
      name: "dash-count",
      title: t("dash-count.title"),
      type: "Address Bar",
      explanation: t("dash-count.explanation"),
      note: "",
      value: features.dashCount,
    },
    {
      name: "equal-count",
      title: t("equal-count.title"),
      type: "Address Bar",
      explanation: t("equal-count.explanation"),
      note: "",
      value: features.equalCount,
    },
    {
      name: "dot-count",
      title: t("dot-count.title"),
      type: "Address Bar",
      explanation: t("dot-count.explanation"),
      note: "",
      value: features.dotCount,
    },
    {
      name: "underscore-count",
      title: t("underscore-count.title"),
      type: "Address Bar",
      explanation: t("underscore-count.explanation"),
      note: "",
      value: features.underscoreCount,
    },
    {
      name: "slash-count",
      title: t("slash-count.title"),
      type: "Address Bar",
      explanation: t("slash-count.explanation"),
      note: "",
      value: features.slashCount,
    },
    {
      name: "digit-count",
      title: t("digit-count.title"),
      type: "Address Bar",
      explanation: t("digit-count.explanation"),
      note: "",
      value: features.digitCount,
    },
    {
      name: "pcemptylinks",
      title: t("pcemptylinks.title"),
      type: "HTML/DOM Structure",
      explanation: t("pcemptylinks.explanation"),
      note: "An empty link is a hyperlink that does not lead to a different web page. When clicked, it typically results in staying on the current page or displaying a blank page. This can occur when the link's URL is missing or invalid.",
      value: features.pcEmptylink
        ? `${Math.round(features.pcEmptylink)}%`
        : null,
    },
    {
      name: "pcextlinks",
      title: t("pcextlinks.title"),
      type: "HTML/DOM Structure",
      explanation: t("pcextlinks.explanation"),
      note: "Note : An external link is a hyperlink that directs users from one website to a different website with a different domain. When clicked, the link takes the user away from the current site and navigates them to a new site.",
      value: features.pcExtlink ? `${Math.round(features.pcExtlink)}%` : null,
    },
    {
      name: "pcrequrl",
      title: t("pcrequrl.title"),
      type: "HTML/DOM Structure",
      explanation: t("pcrequrl.explanation"),
      note: "Note: An external resource URL refers to the web address of a resource, such as images, audio files, or embedded content, that is hosted on a different domain from the main or submitted URL.",
      value: features.pcRequrl ? `${Math.round(features.pcRequrl)}%` : null,
    },
    {
      name: "zerolink",
      title: t("zerolink.title"),
      type: "HTML/DOM Structure",
      explanation: t("zerolink.explanation"),
      note: "",
      value:
        features.zerolink != null
          ? features.zerolink
            ? t_common("true")
            : t_common("false")
          : null,
    },
    {
      name: "extFavicon",
      title: t("ext-favicon.title"),
      type: "HTML/DOM Structure",
      explanation: t("ext-favicon.explanation"),
      note: "",
      value:
        features.extFavicon != null
          ? features.extFavicon
            ? t_common("true")
            : t_common("false")
          : null,
    },
    {
      name: "sfh",
      title: t("sfh.title"),
      type: "HTML/DOM Structure",
      explanation: t("sfh.explanation"),
      note: "Note: SFH stands for server-side form handler, which is the URL specified in the `action` attribute of an HTML form. This URL determines where the form data will be submitted for processing when a user fills out and submits the form.",
      value:
        features.sfh != null
          ? features.sfh
            ? t_common("true")
            : t_common("false")
          : null,
    },
    {
      name: "redirection",
      title: t("redirection.title"),
      type: "Abnormal",
      explanation: t("redirection.explanation"),
      note: "",
      value:
        features.redirection != null
          ? features.redirection
            ? t_common("true")
            : t_common("false")
          : null,
    },
    {
      name: "domainend",
      title: t("domainend.title"),
      type: "Domain",
      explanation: t("domainend.explanation"),
      note: "",
      value:
        features.domainEnd != null
          ? features.domainEnd
            ? t_common("true")
            : t_common("false")
          : null,
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center mt-8 border border-b-0 rounded-t-lg px-4 py-2 bg-gray-100 dark:bg-gray-900">
        <p className="font-semibold">{t("title")}</p>

        <div className={`flex items-center justify-center shrink-0 w-14`}>
          {t("value")}
        </div>
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
                  {item.type == "Address Bar" && t("type.address-bar")}
                  {item.type == "HTML/DOM Structure" && t("type.html-dom")}
                  {item.type == "Abnormal" && t("type.abnormal")}
                  {item.type == "Domain" && t("type.domain")}
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
