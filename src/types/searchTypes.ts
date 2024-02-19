export enum Verdict {
  "SAFE" = "safe",
  "UNSAFE" = "unsafe",
}

export interface UrlInfo {
  url: string;
  verdict: Verdict;
  date: Date;
}
