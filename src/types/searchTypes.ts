export enum Verdict {
  "SAFE" = "safe",
  "UNSAFE" = "unsafe",
}

export interface SearchResult {
  url: string;
  verdict: Verdict;
  date: Date;
}
