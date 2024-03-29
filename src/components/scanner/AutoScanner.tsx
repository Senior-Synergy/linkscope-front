"use client";

import { useEffect, useState } from "react";
import { UrlSelectorItem } from "@/types/urlTypes";
import { useRouter } from "next/navigation";

import ModalWrapper from "../common/ModalWrapper";
import Button from "../common/Button";
import IdentifiedUrlList from "./IdentifiedUrlList";

function AutoScanner() {
  const router = useRouter();
  const [textareaInput, setTextareaInput] = useState("");
  const [urlList, setUrlList] = useState<UrlSelectorItem[]>([]);

  const [isConfirmingReset, setIsConfirmingReset] = useState(false);

  function urlify(text: string): string[] {
    const urlRegex =
      /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;

    return text.match(urlRegex) || [];
  }

  function handleSubmitURLs() {
    const processedUrls = urlList
      .filter((urlItem) => urlItem.isSelected)
      .map((urlItem) => urlItem.url);

    router.push("/scan/result/1");
  }

  function handleClearInput() {
    setUrlList([]);
    setTextareaInput("");
    setIsConfirmingReset(false);
  }

  useEffect(() => {
    // Create a set of current URLs from textInput
    const currentUrls = new Set(urlify(textareaInput));

    // Update the urlList based on the comparison
    setUrlList((prevUrlList) => {
      // Filter out the urls that are not in textInput anymore
      const updatedList = prevUrlList.filter((entry) =>
        currentUrls.has(entry.url)
      );

      // Add new entries for urls in textInput that don't exist in urlList
      currentUrls.forEach((url) => {
        if (!prevUrlList.some((entry) => entry.url === url)) {
          updatedList.push({ url, isSelected: false });
        }
      });

      return updatedList;
    });
  }, [textareaInput]);
  return (
    <>
      <div
        className="flex flex-col gap-4 w-full"
      >
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold mb-2">
            Automatic Mode
            <span className="text-orange-500 font-light"> (experimental)</span>
          </h3>
          <p className="mb-2">
            Simply Input a text body that contains suspecious URLs.
            <span className="font-bold text-primary"> LINKSCOPE</span> will
            automatically extract those URLs from the text body for you.
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">Note: </span>
            Some unique URLs may not be recognized.
          </p>
        </div>

        {/* Text input area */}
        <textarea
          className="min-h-32 w-full p-2
            border rounded-lg
            focus:outline-none focus:ring-1 focus:ring-primary-300 
            bg-white"
          name="text"
          placeholder="Enter text here..."
          value={textareaInput}
          onChange={(e) => setTextareaInput(e.target.value)}
        />

        {/* Title */}
        <p className="font-medium">Identified URL(s)</p>

        {/* Identified link list */}
        <IdentifiedUrlList urlList={urlList} onUpdateUrlList={setUrlList} />

        {/* Buttons */}
        <div className="flex w-full h-12 gap-4">
          <div className="w-1/2">
            <Button
              title="Reset"
              onClick={() => setIsConfirmingReset(true)}
              disabled={textareaInput.length < 1}
            />
          </div>
          <div className="w-1/2">
            <Button
              title="Submit"
              onClick={handleSubmitURLs}
              disabled={!urlList.some((urlItem) => urlItem.isSelected)}
              primary
            />
          </div>
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

export default AutoScanner;
