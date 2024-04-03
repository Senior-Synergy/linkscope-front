import { Url } from "@/types/urlTypes";
import UrlListItem from "./UrlListItem";

interface UrlListProps {
  urlList: Url[];
}

function UrlList({ urlList }: UrlListProps) {
  return (
    <div className="space-y-2 p-2 bg-gray-50 rounded-xl border">
      <div className="flex justify-between p-4 bg-gray-200 border font-bold rounded-lg">
        <div className="flex">
          <p>URL</p>
        </div>

        <div className="flex gap-4 text-center">
          <p className="hidden sm:block w-20">Date</p>
          <p className="w-20">Status</p>
        </div>
      </div>
      <div
        className="flex flex-col
                w-full 
                rounded-lg bg-white border
                divide-y divide
                overflow-hidden"
      >
        {urlList.map((url, index) => (
          <UrlListItem
            key={index}
            url={url.finalURL}
            date={url.dateUpdated}
            isSafe={!url.latestResult.isPhish}
          />
        ))}
      </div>
    </div>
  );
}

export default UrlList;
