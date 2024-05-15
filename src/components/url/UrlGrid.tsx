"use client"

import Link from "next/link";
import CountryFlag from "@/components/common/CountryFlag";
import { FaChevronRight } from "react-icons/fa6";
import { UrlCommon } from "@/types/urlTypes";
import { FaQuestionCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface UrlGridProps {
  urls: UrlCommon[];
}

function UrlGrid({ urls }: UrlGridProps) {
  const t = useTranslations("Url");

  return (
    <div>
      {urls.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {urls.map((url, index) => (
            <Link key={index} href={`/url/${url.urlId}`}>
              <div
                key={index}
                className="flex items-center justify-between 
                      p-4 h-20 min-w-72 min-h-32 
                      border rounded-lg
                      hover:bg-gray-200 hover:dark:bg-gray-800
                      transition-colors"
              >
                <div className="flex truncate mr-4">
                  <div className="w-full">
                    <p className="truncate font-medium">{url.finalUrl}</p>
                    <div className="flex items-center mt-1">
                      <CountryFlag country={url.country} />

                      <p className="truncate text-gray-500 ml-2">
                        {url.ipAddress}
                      </p>
                    </div>

                    <p className="mt-4 text-sm">
                      <strong>{t("last-updated")}:&nbsp;</strong>
                      {url.creationDate
                        ? new Date(url.updateDate).toLocaleString()
                        : "-"}
                    </p>
                  </div>
                </div>

                <FaChevronRight className="h-5 w-5 shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-4 min-h-96 m-auto border rounded-lg">
          <FaQuestionCircle className="w-24 h-24 mb-4" />A
          <h2 className="font-bold text-center">No URLs Found...</h2>
        </div>
      )}
    </div>
  );
}

export default UrlGrid;
