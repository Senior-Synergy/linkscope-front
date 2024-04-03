import { Url, UrlInfo, UrlResult } from "@/types/urlTypes";

export function generateUrlInfos(size: number) {
  const urlInfos: Url[] = [];

  for (let i = 0; i < size; i++) {
    const urlResult: UrlResult = {
      urlID: i,
      resultID: i * 10,
      submissionID: i * 100,
      submittedURL: `https://example.com/${i}`,
      phishProb: Math.random(),
      isPhish: Math.random() > 0.5,
      dateCreated: new Date(),
    };

    const urlInfo: Url = {
      urlID: i,
      finalURL: `https://final.example.com/${i}`,
      latestResult: urlResult,
      dateUpdated: new Date(),
    };

    urlInfos.push(urlInfo);
  }

  return urlInfos;
}

export function generateUrlResult() {
  return {
    urlID: 999,
    resultID: 999,
    submissionID: 999,
    submittedURL: `https://example.com/${99}`,
    phishProb: Math.random(),
    isPhish: Math.random() > 0.5,
    dateCreated: new Date(),
  };
}

export function generateUrlResults(size: number) {
  const urlResults: UrlResult[] = [];

  for (let i = 0; i < size; i++) {
    const urlResult: UrlResult = {
      urlID: i,
      resultID: i * 10,
      submissionID: i * 100,
      submittedURL: `https://example.com/${i}`,
      phishProb: Math.random(),
      isPhish: Math.random() > 0.5,
      dateCreated: new Date(),
    };

    urlResults.push(urlResult);
  }

  return urlResults;
}

export function generateUrl() {
  return {
    urlID: 99,
    finalURL: `https://final.example.com/${99}`,
    latestResult: generateUrlResult(),
    dateUpdated: new Date(),
  };
}
