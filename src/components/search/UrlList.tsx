import UrlListItem from "./UrlListItem";

import { UrlInfo, Verdict } from "@/types/searchTypes";

interface UrlListProps {
  urlList: UrlInfo[];
}

function UrlList({ urlList: searchResults }: UrlListProps) {
  return (
    <div
      className="flex flex-col
                w-full 
                rounded-xl bg-white border shadow-lg
                divide-y divide
                overflow-hidden"
    >
      {searchResults.map((result, index) => (
        <UrlListItem
          key={index}
          url={result.url}
          date={result.date}
          isSafe={result.verdict === Verdict.SAFE}
        />
      ))}
    </div>
  );
}

export default UrlList;
