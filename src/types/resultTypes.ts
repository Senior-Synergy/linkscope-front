export interface ScanResult {
  modelResults: {
    verdict: number;
    probabilityOfPhishUrl: number;
  };
  urlDetails: {
    actualUrl: string;
  };
  extractedFeatures: ExtractedFeatures;
}

export interface ExtractedFeatures {
  domainLength: number;
  hasWwwSubdomain: boolean;
  hasMultipleSubdomains: boolean;
  usesHttps: boolean;
  usesHttp: boolean;
  isShortUrl: boolean;
  containsIpAddress: boolean;
  atCount: number;
  hyphenCount: number;
  equalCount: number;
  dotCount: number;
  underscoreCount: number;
  slashCount: number;
  digitCount: number;
  containsLogWord: boolean;
  containsPayWord: boolean;
  containsWebWord: boolean;
  containsCmdWord: boolean;
  containsAccountWord: boolean;
  percentageEmptyLinks: number;
  percentageExternalLinks: number;
  percentageExternalResourcesUrl: number;
  hasZeroLink: boolean;
  hasDifferentFaviconDomain: boolean;
  hasSubmitToEmail: boolean;
  isSfh: boolean;
  hasRedirection: boolean;
  isDomainAgeLessThan6Months: boolean;
  isDomainEndLessThanOrEqual1Year: boolean;
}
