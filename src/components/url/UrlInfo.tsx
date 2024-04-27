import React from "react";
import TextCopyWrapper from "../common/wrapper/TextCopyWrapper";
import Link from "next/link";
import { divideArrayToString, formatDayDuration } from "@/utils/formattor";
import { FaChevronRight, FaCopy, FaLink } from "react-icons/fa6";
import { Url, UrlCommon } from "@/types/urlTypes";

interface UrlInfoProps {
  url: UrlCommon;
  hideDetails?: boolean;
}
function UrlInfo({ url, hideDetails }: UrlInfoProps) {
  const urlInfoItems = [
    {
      name: "IP address",
      value: url.ipAddress ? url.ipAddress : "-",
    },
    {
      name: "hostname",
      value: url.hostname,
    },
    {
      name: "domain",
      value: url.domain,
    },
    {
      name: "subdomains",
      value: url.subdomains ? divideArrayToString(url.subdomains, ", ") : "-",
    },
    {
      name: "scheme",
      value: url.scheme ? url.scheme : "-",
    },
    {
      name: "creation date",
      value: url.creationDate ? url.creationDate.toLocaleDateString() : "-",
    },
    {
      name: "expiration date",
      value: url.expirationDate ? url.expirationDate.toLocaleDateString() : "-",
    },
    {
      name: "domain age",
      value: url.domainAge ? formatDayDuration(url.domainAge) : "-",
    },
    {
      name: "domain ending in",
      value: url.domainEnd ? formatDayDuration(url.domainEnd) : "-",
    },
    {
      name: "city",
      value: url.city ? url.city : "-",
    },
    {
      name: "state",
      value: url.state ? url.state : "-",
    },
    {
      name: "country",
      value: url.country ? url.country : "-",
    },
  ];

  return (
    <div>
      <div className="border-t border-x rounded-t-lg px-4 py-2 bg-gray-100">
        <h2 className="text-gray-700 font-semibold">URL Information</h2>
      </div>

      <div className="p-4 border rounded-b-lg">
        <div className="flex items-center gap-8">
          <div className="grow truncate">
            <h2 className="text-xl font-semibold mb-1 truncate">{url.finalUrl}</h2>
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
            <div className="flex items-center gap-2 p-2 border rounded bg-white hover:bg-gray-200 transition-all">
              <p className="text-sm">Copy</p>
              <FaCopy className="w-5 h-5 fill-gray-400 shrink-0" />
            </div>
          </TextCopyWrapper>
          <Link href={url.finalUrl} target="_blank">
            <div className="flex items-center gap-2 p-2 border rounded bg-white hover:bg-gray-200 transition-all">
              <p className="text-sm">Go To</p>
              <FaLink className="w-5 h-5 fill-gray-400 shrink-0" />
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-4 p-4 mt-4 rounded bg-gray-100">
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
