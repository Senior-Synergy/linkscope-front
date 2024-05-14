import React from "react";
import TextCopyWrapper from "../common/wrapper/TextCopyWrapper";
import Link from "next/link";
import { divideArrayToString } from "@/utils/formattor";
import { FaChevronRight, FaCopy, FaLink } from "react-icons/fa6";
import { Url, UrlCommon } from "@/types/urlTypes";
import { useTranslations } from "next-intl";

interface UrlInfoProps {
  url: UrlCommon;
  hideDetails?: boolean;
}
function UrlInfo({ url }: UrlInfoProps) {
  const t_common = useTranslations("Common");
  const t_datetime = useTranslations("Datetime");
  const t = useTranslations("UrlInfo.url-details");

  function formatDayDuration(days: number): string {
    const years = Math.floor(days / 365);
    days -= years * 365;

    const months = Math.floor(days / 30);
    days -= months * 30;

    const result: string[] = [];

    if (years > 0) {
      result.push(
        `${years} ${years > 1 ? t_datetime("years") : t_datetime("year")}`
      );
    }

    if (months > 0) {
      result.push(
        `${months} ${months > 1 ? t_datetime("months") : t_datetime("month")}`
      );
    }

    if (days > 0) {
      result.push(
        `${days} ${days > 1 ? t_datetime("days") : t_datetime("day")}`
      );
    }

    return result.join(", ");
  }

  const urlInfoItems = [
    {
      name: t("info-items.ip-address"),
      value: url.ipAddress ? url.ipAddress : "-",
    },
    {
      name: t("info-items.hostname"),
      value: url.hostname,
    },
    {
      name: t("info-items.domain"),
      value: url.domain,
    },
    {
      name: t("info-items.subdomains"),
      value: url.subdomains ? divideArrayToString(url.subdomains, ", ") : "-",
    },
    {
      name: t("info-items.scheme"),
      value: url.scheme ? url.scheme : "-",
    },
    {
      name: t("info-items.creation-date"),
      value: url.creationDate ? url.creationDate.toLocaleDateString() : "-",
    },
    {
      name: t("info-items.expiration-date"),
      value: url.expirationDate ? url.expirationDate.toLocaleDateString() : "-",
    },
    {
      name: t("info-items.domain-age"),
      value: url.domainAge ? formatDayDuration(url.domainAge) : "-",
    },
    {
      name: t("info-items.domain-ending-in"),
      value: url.domainEnd ? formatDayDuration(url.domainEnd) : "-",
    },
    {
      name: t("info-items.city"),
      value: url.city ? url.city : "-",
    },
    {
      name: t("info-items.state"),
      value: url.state ? url.state : "-",
    },
    {
      name: t("info-items.country"),
      value: url.country ? url.country : "-",
    },
  ];

  return (
    <div>
      <div className="border border-b-0 rounded-t-lg px-4 py-2 bg-gray-100 dark:bg-gray-900">
        <p className="font-semibold">{t("title")}</p>
      </div>

      <div className="p-4 border rounded-b-lg">
        <div className="flex items-center gap-8">
          <div className="grow truncate">
            <h2 className="text-xl font-semibold mb-1 truncate">
              {url.finalUrl}
            </h2>
            <p className="text-gray-500 truncate">{url.ipAddress}</p>
          </div>

          {/* <Link href={`/url/${url.urlId}`}>
            <div className="flex items-center gap-2 p-2 border rounded bg-white hover:bg-gray-200 transition-all">
              <p className="text-sm">More Details</p>
              <FaChevronRight className="w-5 h-5 fill-gray-400 shrink-0" />
            </div>
          </Link> */}
        </div>

        <div className="flex gap-2 mt-4">
          <TextCopyWrapper text={url.finalUrl}>
            <div className="flex items-center gap-2 p-2 border rounded hover:bg-gray-200 hover:dark:bg-gray-800 transition-all">
              <p className="text-sm">{t_common("copy")}</p>
              <FaCopy className="w-5 h-5 fill-gray-400 shrink-0" />
            </div>
          </TextCopyWrapper>
          <Link href={url.finalUrl} target="_blank">
            <div className="flex items-center gap-2 p-2 border rounded hover:bg-gray-200 hover:dark:bg-gray-800 transition-all">
              <p className="text-sm">{t_common("go-to")}</p>
              <FaLink className="w-5 h-5 fill-gray-400 shrink-0" />
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-4 p-4 mt-4 rounded bg-gray-100 dark:bg-gray-900">
          {urlInfoItems.map((item, index) => (
            <div key={index}>
              <p className="text-sm text-gray-500">{item.name}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UrlInfo;
