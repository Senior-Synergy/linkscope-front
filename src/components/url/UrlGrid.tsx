import Link from "next/link";
import CountryFlag from "@/components/common/CountryFlag";
import { FaChevronRight } from "react-icons/fa6";
import { UrlCommon } from "@/types/urlTypes";

interface UrlGridProps {
  urls: UrlCommon[];
}

async function UrlGrid({ urls }: UrlGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {urls.map((url, index) => (
        <Link key={index} href={`url/${url.urlId}`}>
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

                  <p className="truncate text-gray-500 ml-2">{url.ipAddress}</p>
                </div>

                <p className="mt-4 text-sm">
                  <strong>Last Updated: </strong>
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
  );
}

export default UrlGrid;
