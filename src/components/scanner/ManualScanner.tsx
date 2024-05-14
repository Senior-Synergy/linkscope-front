"use client";

import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { FaTrash } from "react-icons/fa6";

import Button from "../common/Button";

interface ManualScannerProps {
  submitUrls: (urls: string[]) => void;
}

function ManualScanner({ submitUrls }: ManualScannerProps) {
  const t = useTranslations("Common");
  const t_scanner = useTranslations("Scanner");

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

  function isValidUrlChat(str: string) {
    try {
      new URL(str);
      return true;
    } catch (err) {
      // If the URL doesn't contain a protocol, prepend 'http://' and try again
      if (!str.includes("://")) {
        str = "http://" + str;
        try {
          var url = new URL(str);
          // console.log(str, url.hostname)
          // Optionally, validate the hostname using a regex
          // This example checks for a valid domain name format
          return url.hostname &&
            url.hostname.match(
              /^([a-z0-9])(([a-z0-9-]{1,61})?[a-z0-9]{1})?(\.[a-z0-9](([a-z0-9-]{1,61})?[a-z0-9]{1})?)?(\.[a-zA-Z]{2,4})+$/
            )
            ? true
            : false;
        } catch (err) {
          return false;
        }
      }
      return false;
    }
  }

  function isValidUrl(string: string) {
    // Prepend 'http://' if no protocol is specified
    if (string && string.length > 1 && string.slice(0, 2) == "//") {
      string = "http:" + string; // Dummy protocol so that URL works
    }
    try {
      var url = new URL(string);
      // Optionally, validate the hostname using a regex
      // This example checks for a valid domain name format
      return url.hostname &&
        url.hostname.match(
          /^([a-z0-9])(([a-z0-9-]{1,61})?[a-z0-9]{1})?(\.[a-z0-9](([a-z0-9-]{1,61})?[a-z0-9]{1})?)?(\.[a-zA-Z]{2,4})+$/
        )
        ? true
        : false;
    } catch (_) {
      return false;
    }
  }

  function addUrlToList(urlInput: string) {
    if (!isValidUrlChat(textInput)) {
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
          <h3 className="text-xl font-bold mb-2">
            {t_scanner("manual-mode.title")}
          </h3>
          <p>{t_scanner("manual-mode.subtitle")}</p>
        </div>

        <div className="flex gap-4">
          <label className="grow">
            <input
              className={`w-full h-12 p-2 rounded-lg
                          border focus:outline-none
                          bg-white dark:bg-black`}
              name="url-input"
              placeholder={t_scanner("manual-mode.placeholder")}
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
            {t("add")}
          </Button>
        </div>

        {isWarningInvalid && (
          <p className="text-sm text-red-500">
            {t_scanner("message.enter-invalid")}
          </p>
        )}

        {isWarningRepeat && (
          <p className="text-sm text-red-500">
            {t_scanner("message.enter-repeat")}
          </p>
        )}

        {urlList.length >= 5 && (
          <p className="text-sm text-red-500">
            {t_scanner("message.enter-max-five")}
          </p>
        )}

        <div
          className="flex flex-col
                    h-60 overflow-y-auto
                    rounded-lg bg-gray-100 dark:bg-gray-800"
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
                    className="group rounded-full p-2 bg-white dark:bg-gray-950 hover:bg-red-500 transition-colors"
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
          {t("submit")}
        </Button>
      </form>
    </>
  );
}

export default ManualScanner;
