import { useTranslations } from "next-intl";

import { UrlSelectorItem } from "@/types/urlTypes";

import IdentifiedUrlListItem from "./IdentifiedUrlListItem";

interface IdentifiedUrlListProps {
  urlList: UrlSelectorItem[];
  onUpdateUrlList: (updatedUrlList: UrlSelectorItem[]) => void;
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
  const t_scanner = useTranslations("Scanner");

  return (
    <div
      className="flex flex-col p-2 gap-4
                w-full h-64 overflow-y-auto
                rounded-md bg-gray-100 dark:bg-gray-800"
    >
      {/* Url list */}
      {urlList.length > 0 ? (
        <ul className="flex flex-col gap-2 w-full">
          {urlList.map((item, index) => (
            <IdentifiedUrlListItem
              key={index}
              url={item.url}
              isDisabled={urlList.filter((url) => url.isSelected).length >= 5}
              isSelected={item.isSelected}
              onClick={() => handleUpdateUrlList(index)}
            />
          ))}
        </ul>
      ) : (
        <div
          className="flex flex-col flex-auto items-center justify-center 
                    text-gray-400"
        >
          {t_scanner("auto-mode.no-urls")}
        </div>
      )}
    </div>
  );
}

export default IdentifiedUrlList;
