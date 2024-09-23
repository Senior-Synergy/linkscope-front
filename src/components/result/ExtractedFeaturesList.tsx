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
      value: features.www,
    },
    {
      name: "subdomain",
      title: t("subdomain.title"),
      type: "Address Bar",
      explanation: t("subdomain.explanation"),
      note: "",
      value: features.subDomain,
    },
    {
      name: "https",
      title: t("https.title"),
      type: "Address Bar",
      explanation: t("https.explanation"),
      note: "",
      value: features.https,
    },
    {
      name: "shortUrl",
      title: t("short-url.title"),
      type: "Address Bar",
      explanation: t("short-url.explanation"),
      note: "",
      value: features.shortUrl,
    },
    {
      name: "at-count",
      title: t("at-count.title"),
      type: "Address Bar",
      explanation: t("at-count.explanation"),
      note: "",
      value: features.atCount,
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
      name: "log-count",
      title: t("log-count.title"),
      type: "Address Bar",
      explanation: t("log-count.explanation"),
      note: "",
      value: features.hasLogWord,
    },
    {
      name: "pay-count",
      title: t("pay-count.title"),
      type: "Address Bar",
      explanation: t("pay-count.explanation"),
      note: "",
      value: features.hasPayWord,
    },
    {
      name: "web-count",
      title: t("web-count.title"),
      type: "Address Bar",
      explanation: t("web-count.explanation"),
      note: "",
      value: features.hasWebWord,
    },
    {
      name: "account-count",
      title: t("account-count.title"),
      type: "Address Bar",
      explanation: t("account-count.explanation"),
      note: "",
      value: features.hasAccountWord,
    },

    {
      name: "pcemptylinks",
      title: t("pcemptylinks.title"),
      type: "HTML/DOM Structure",
      explanation: t("pcemptylinks.explanation"),
      value: features.pcEmptylink,
    },
    {
      name: "pcextlinks",
      title: t("pcextlinks.title"),
      type: "HTML/DOM Structure",
      explanation: t("pcextlinks.explanation"),
      value: features.pcExtlink,
    },
    {
      name: "pcrequrl",
      title: t("pcrequrl.title"),
      type: "HTML/DOM Structure",
      explanation: t("pcrequrl.explanation"),
      note: t("pcrequrl.note"),
      value: features.pcRequrl,
    },
    {
      name: "zerolink",
      title: t("zerolink.title"),
      type: "HTML/DOM Structure",
      explanation: t("zerolink.explanation"),
      note: "",
      value: features.zerolink,
    },
    {
      name: "extFavicon",
      title: t("ext-favicon.title"),
      type: "HTML/DOM Structure",
      explanation: t("ext-favicon.explanation"),
      note: "",
      value: features.extFavicon,
    },
    {
      name: "sfh",
      title: t("sfh.title"),
      type: "HTML/DOM Structure",
      explanation: t("sfh.explanation"),
      note: t("sfh.note"),
      value: features.sfh,
    },
    {
      name: "submit to email",
      title: t("submit-to-email.title"),
      type: "HTML/DOM Structure",
      explanation: t("submit-to-email.explanation"),
      value: features.submitToEmail,
    },
    {
      name: "redirection",
      title: t("redirection.title"),
      type: "Abnormal",
      explanation: t("redirection.explanation"),
      note: "",
      value: features.redirection,
    },
    {
      name: "domainage",
      title: t("domainage.title"),
      type: "Domain",
      explanation: t("domainage.explanation"),
      note: "",
      value: features.domainAge,
    },
    {
      name: "domainend",
      title: t("domainend.title"),
      type: "Domain",
      explanation: t("domainend.explanation"),
      note: "",
      value: features.domainEnd,
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center mt-8 border border-b-0 rounded-t-lg px-4 py-2 bg-gray-200 dark:bg-gray-800">
        <p className="font-semibold">{t("title")}</p>

        <div className={`flex items-center justify-center shrink-0 w-14`}>
          {t("value")}
        </div>
      </div>

      <div className="border rounded-b-lg divide-y divide bg-gray-50 dark:bg-gray-950">
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
              {item.value === null || item.value === -1 ? "-" : item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExtractedFeaturesList;
