"use client";

import { useEffect, useState } from "react";
import ModalWrapper from "../common/ModalWrapper";
import { UrlItem } from "@/types/scanTypes";
import { useRouter } from "next/navigation";

function Scanner() {
  const router = useRouter();

  const [textInput, setTextInput] = useState("");
  const [urlList, setUrlList] = useState<UrlItem[]>([]);

  const [isConfirmingReset, setIsConfirmingReset] = useState(false);

  function urlify(text: string): string[] {
    const urlRegex =
      /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;

    return text.match(urlRegex) || [];
  }

  function handleUpdateUrlList(index: number) {
    const updatedList = [...urlList];
    updatedList[index].isSelected = !updatedList[index].isSelected;
    setUrlList(updatedList);
  }

  function processUrl() {
    const processedUrls = urlList
      .filter((urlItem) => urlItem.isSelected)
      .map((urlItem) => ({
        url: urlItem.url,
        desc: "sample",
      }));

    router.push("/scan/result/1");
  }

  function handleClearInput() {
    setUrlList([]);
    setTextInput("");
    setIsConfirmingReset(false);
  }

  useEffect(() => {
    // Create a set of current URLs from textInput
    const currentUrls = new Set(urlify(textInput));

    // Update the urlList based on the comparison
    setUrlList((prevUrlList) => {
      // Filter out the urls that are not in textInput anymore
      const updatedList = prevUrlList.filter((entry) =>
        currentUrls.has(entry.url)
      );

      // Add new entries for urls in textInput that don't exist in urlList
      currentUrls.forEach((url) => {
        if (!prevUrlList.some((entry) => entry.url === url)) {
          updatedList.push({ url, isSelected: true });
        }
      });

      return updatedList;
    });
  }, [textInput]);

  return (
    <>
      <div
        className="flex flex-col gap-4 p-4
                  w-full
                  rounded-xl bg-white border shadow-lg"
      >
        {/* Title */}
        <p className="font-medium">Input text</p>

        {/* Text input area */}
        <textarea
          className="min-h-32 w-full p-2
                    border rounded focus:outline-none focus:ring-1 focus:ring-primary-300 
                    bg-white"
          name="text"
          placeholder="Enter text here..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />

        {/* Title */}
        <p className="font-medium">Identified URL(s)</p>

        {/* Identified link list */}
        <div
          className="flex flex-col p-2 gap-4
                      w-full h-64 overflow-y-auto
                      rounded-lg bg-gray-100"
        >
          {/* Url list */}
          {urlList.length > 0 ? (
            <ul className="flex flex-col gap-2 w-full">
              {urlList.map((urlItem, index) => (
                <button
                  key={index}
                  onClick={() => handleUpdateUrlList(index)}
                  className={`flex items-center justify-between 
                            w-full gap-2 p-2 
                            rounded-lg border
                            transition-colors ${
                              urlItem.isSelected
                                ? "bg-white hover:bg-gray-200"
                                : "bg-gray-300 line-through "
                            }`}
                >
                  <div className={`${!urlItem.isSelected && ""} truncate pl-2`}>
                    {urlItem.url}
                  </div>
                  <div
                    className="flex flex-shrink-0 items-center justify-center 
                                w-8 h-8 rounded-full
                                bg-white
                                font-bold
                                transition-all"
                  ></div>
                </button>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col flex-auto items-center justify-center text-gray-400">
              No URL detected
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end w-full space-x-4">
          <button
            onClick={() => setIsConfirmingReset(true)}
            className={`flex items-center justify-center 
                        w-1/2 h-12 rounded-lg 
                        border
                        transition-all ${
                          textInput
                            ? "border-primary text-primary hover:bg-primary-300 hover:border-transparent hover:text-white"
                            : "pointer-events-none text-deactive border-deactive"
                        }`}
          >
            Reset
          </button>
          <button
            onClick={processUrl}
            className={`flex items-center justify-center 
                      w-1/2 h-12 rounded-lg 
                      text-white 
                      transition-all ${
                        urlList.some((urlItem) => urlItem.isSelected)
                          ? "bg-primary hover:bg-primary-dark"
                          : "pointer-events-none bg-deactive"
                      }`}
          >
            Submit
          </button>
        </div>
      </div>

      <ModalWrapper
        isOpen={isConfirmingReset}
        onClose={() => setIsConfirmingReset(false)}
      >
        {/* Your modal content goes here */}
        <h2 className="text-2xl font-bold mb-4">
          Are you sure you want to reset?
        </h2>
        <p>
          This will also clear all the identified links and scanned results
          currently being displayed
        </p>
        {/* Buttons */}
        <div className="flex items-center justify-end w-full space-x-4 mt-4">
          <button
            onClick={() => setIsConfirmingReset(false)}
            className="flex items-center justify-center w-1/2 h-12 rounded-lg border border-primary bg-white text-primary hover:bg-primary-dark hover:border-transparent hover:text-white transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleClearInput}
            className="flex items-center justify-center w-1/2 h-12 rounded-lg bg-primary text-white hover:bg-primary-dark hover:text-white transition-all"
          >
            Confirm
          </button>
        </div>
      </ModalWrapper>
    </>
  );
}

export default Scanner;
