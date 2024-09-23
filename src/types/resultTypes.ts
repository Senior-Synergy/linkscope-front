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

export interface FeatureBase {
  featureId: number;
  domainLength: number | null;
  www: boolean | null;
  subdomain: string | null;
  https: boolean | null;
  shortUrl: boolean | null;
  atCount: number | null;
  dashCount: number | null;
  equalCount: number | null;
  dotCount: number | null;
  underscoreCount: number | null;
  slashCount: number | null;
  digitCount: number | null;
  logCount: number | null;
  payCount: number | null;
  webCount: number | null;
  accountCount: number | null;
  pcEmptylink: number | null;
  pcExtlink: number | null;
  pcRequrl: number | null;
  zerolink: boolean | null;
  extFavicon: boolean | null;
  submit2Email: boolean | null;
  sfh: boolean | null;
  redirection: boolean | null;
  domainAge: boolean | null;
  domainEnd: boolean | null;

  // ---------------------------------

  shorttenUrl: string | null;
  ipInUrl: string | null;
  emptyLinksCount: number;
  externalLinks: string[] | null;
  externalImgRequrl: string[] | null;
  externalAudioRequrl: string[] | null;
  externalEmbedRequrl: string[] | null;
  externalIframeRequrl: string[] | null;
  lenExternalLinks: number | null;
  lenExternalImgRequrl: number | null;
  lenExternalAudioRequrl: number | null;
  lenExternalEmbedRequrl: number | null;
  lenExternalIframeRequrl: number | null;
}


export interface ExtractedFeatures {
  domainLength: number;
  hasWwwSubdomain: boolean;
  hasMultipleSubdomains: boolean;
  usesHttps: boolean;
  isShortUrl: boolean;
  containsIpAddress: boolean;
  hyphenCount: number;
  equalCount: number;
  dotCount: number;
  underscoreCount: number;
  slashCount: number;
  digitCount: number;
  containsLogWord: boolean;
  containsPayWord: boolean;
  containsWebWord: boolean;
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
