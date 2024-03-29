"use client";

import React, { FormEvent, useState } from "react";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

function ManualScanner() {
  const router = useRouter();
  const [textInput, setTextInput] = useState("");
  const [urlList, setUrlList] = useState<String[]>([]);

  const [isWarningInvalid, setIsWarningInvalid] = useState(false);
  const [isWarningRepeat, setIsWarningRepeat] = useState(false);

  function validateUrl(text: string): boolean {
    // const urlRegex =
    //   /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;

    // return urlRegex.test(text);

    // try {
    //   const url = new URL(text);
    //   return true;
    // } catch (err) {
    //   return false;
    // }

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
      <div
        className="flex flex-col gap-4
                  w-full rounded-lg"
      >
        <div>
          <h3 className="text-xl font-bold mb-2">Manual Mode</h3>
          <p>
            Manually input individual URLs that you wish to scan.
            <span className="font-bold text-primary"> LINKSCOPE</span> will
            validate your URLs before continuing.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <label className="grow">
                <input
                  className={`w-full h-12 p-2 rounded-lg
                            border focus:outline-none focus:ring-1 focus:ring-primary-light 
                            bg-white`}
                  name="url-input"
                  placeholder="Enter a URL..."
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                />
              </label>

              <div className="w-32">
                <Button
                  title="Add"
                  type="submit"
                  onClick={() => addUrlToList(textInput)}
                  disabled={textInput.length < 1}
                  primary
                />
              </div>
            </div>

            {isWarningInvalid && (
              <p className="text-sm text-red-500">Please enter a valid URL</p>
            )}

            {isWarningRepeat && (
              <p className="text-sm text-red-500">
                This URL has already been added
              </p>
            )}

            <div
              className="flex flex-col
                w-full h-48 overflow-y-auto
                rounded-lg bg-gray-100 border"
            >
              {/* Url list */}
              {urlList.length > 0 ? (
                <ul className="group flex flex-col w-full">
                  {urlList.map((url, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between 
                                w-full h-12 gap-2 p-2`}
                    >
                      <div className={`${!true && ""} truncate pl-2`}>
                        {url}
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteUrlFromList(index)}
                        className="rounded-full p-2 border hover:bg-red-100"
                      >
                        <FaTrash className="fill-red-500" />
                      </button>
                    </div>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-col flex-auto items-center justify-center text-gray-400"></div>
              )}
            </div>

            <div className="flex w-full h-12 gap-4">
              <Button
                title="Submit"
                onClick={() => router.push("/scan/result/1")}
                disabled={urlList.length <= 0}
                primary
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ManualScanner;
