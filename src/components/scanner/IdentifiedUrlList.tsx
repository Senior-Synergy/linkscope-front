import { UrlItem } from "@/types/urlTypes";

import React from "react";
import IdentifiedUrlListItem from "./IdentifiedUrlListItem";

interface IdentifiedUrlListProps {
  urlList: UrlItem[];
  onUpdateUrlList: (updatedUrlList: UrlItem[]) => void;
}

function IdentifiedUrlList({
  urlList,
  onUpdateUrlList,
}: IdentifiedUrlListProps) {
  function handleUpdateUrlList(index: number) {
    const updatedList = [...urlList];
    updatedList[index].isSelected = !updatedList[index].isSelected;
    onUpdateUrlList(updatedList);
  }

  return (
    <div
      className="flex flex-col p-2 gap-4
                w-full h-64 overflow-y-auto
                rounded-lg bg-gray-100"
    >
      {/* Url list */}
      {urlList.length > 0 ? (
        <ul className="flex flex-col gap-2 w-full">
          {urlList.map((item, index) => (
            <IdentifiedUrlListItem
              key={index}
              url={item.url}
              isSelected={item.isSelected}
              onClick={() => handleUpdateUrlList(index)}
            />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col flex-auto items-center justify-center text-gray-400">
          No URL detected
        </div>
      )}
    </div>
  );
}

export default IdentifiedUrlList;
