"use client";

import React, { FormEvent, useState } from "react";
import { FaTrash } from "react-icons/fa6";

import Button from "../common/Button";

interface ManualScannerProps {
  submitUrls: (urls: string[]) => void;
}

function ManualScanner({ submitUrls }: ManualScannerProps) {
  const [textInput, setTextInput] = useState("");
  const [urlList, setUrlList] = useState<string[]>([]);

  const [isWarningInvalid, setIsWarningInvalid] = useState(false);
  const [isWarningRepeat, setIsWarningRepeat] = useState(false);

  function validateUrl(text: string): boolean {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );

    return pattern.test(text);
  }

  function addUrlToList(urlInput: string) {
    if (!validateUrl(textInput)) {
      clearWarning();
      setIsWarningInvalid(true);
      return;
    }

    if (urlList.includes(textInput)) {
      clearWarning();
      setIsWarningRepeat(true);
      return;
    }

    setUrlList([...urlList, urlInput]);
    setTextInput("");

    clearWarning();
  }

  function clearWarning() {
    setIsWarningInvalid(false);
    setIsWarningRepeat(false);
  }

  function deleteUrlFromList(index: number) {
    const updatedList = [...urlList];
    updatedList.splice(index, 1);
    setUrlList(updatedList);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    addUrlToList(textInput);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold mb-2">Manual Mode</h3>
          <p>Manually input individual URLs that you wish to scan.</p>
        </div>

        <div className="flex gap-4">
          <label className="grow">
            <input
              className={`w-full h-12 p-2 rounded-lg
                          border focus:outline-none
                          bg-white`}
              name="url-input"
              placeholder="Enter a URL..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
          </label>

          <Button
            className="w-32"
            type="submit"
            onClick={() => addUrlToList(textInput)}
            disabled={textInput.length < 1 || urlList.length >= 5}
            primary
          >
            Add
          </Button>
        </div>

        {isWarningInvalid && (
          <p className="text-sm text-red-500">Please enter a valid URL</p>
        )}

        {isWarningRepeat && (
          <p className="text-sm text-red-500">
            This URL has already been added
          </p>
        )}

        {urlList.length >= 5 && (
          <p className="text-sm text-red-500">
            Maximum of 5 URLs is allowed per submission
          </p>
        )}

        <div
          className="flex flex-col
                    h-60 overflow-y-auto
                    rounded-lg bg-gray-100"
        >
          {/* Url list */}
          {urlList.length > 0 ? (
            <ul>
              {urlList.map((url, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between 
                            h-12 gap-2 p-2`}
                >
                  <div className={`pl-2 w-full truncate`}>{url}</div>
                  <button
                    type="button"
                    onClick={() => deleteUrlFromList(index)}
                    className="group rounded-full p-2 bg-white hover:bg-red-500 transition-colors"
                  >
                    <FaTrash className="fill-red-500 group-hover:fill-white" />
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col flex-auto items-center justify-center text-gray-400"></div>
          )}
        </div>

        <Button
          className="w-full h-12"
          onClick={() => submitUrls(urlList)}
          disabled={urlList.length <= 0}
          primary
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default ManualScanner;
