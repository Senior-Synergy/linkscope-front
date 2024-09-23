// ------------------- Component props -------------------

export interface UrlSelectorItem {
  url: string;
  isSelected: boolean;
}

// ------------------- Data structure -------------------

export interface SubmissionCommon {
  submissionId: number;
  dateSubmitted: Date;
}

export interface UrlCommon {
  urlId: number;
  finalUrl: string;
  hostname: string | null;
  domain: string | null;
  subdomains: string[] | null;
  registrar: string | null;
  ipAddress: string | null;
  scheme: string | null;
  creationDate: Date | null;
  expirationDate: Date | null;
  domainAge: number | null;
  domainEnd: number | null;
  city: string | null;
  state: string | null;
  country: string | null;
  googleIsMalicious: boolean | null;
  updateDate: Date;
}

export interface ResultCommon {
  resultId: number;
  submissionId: number | null;
  urlId: number | null;
  featureId: number | null;
  submittedUrl: string;
  phishProb: number;
  phishProbMod: number;
  hasSoup: boolean | null;
  datetimeCreated: Date;
}

export interface FeatureCommon {
  featureId: number;
  domainLength: number | null;
  www: boolean | null;
  subDomain: boolean | null;
  https: boolean | null;
  shortUrl: boolean | null;
  atCount: number | null;
  dashCount: number | null;
  equalCount: number | null;
  dotCount: number | null;
  underscoreCount: number | null;
  slashCount: number | null;
  digitCount: number | null;
  hasLogWord: number | null;
  hasPayWord: number | null;
  hasWebWord: number | null;
  hasAccountWord: number | null;
  pcEmptylink: number | null;
  pcExtlink: number | null;
  pcRequrl: number | null;
  zerolink: boolean | null;
  extFavicon: boolean | null;
  submitToEmail: boolean | null;
  sfh: boolean | null;
  redirection: boolean | null;
  domainAge: boolean | null;
  domainEnd: boolean | null;

  // --------------------------------

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

export interface Result extends ResultCommon {
  url: UrlCommon;
}

export interface ResultExtended extends ResultCommon {
  url: UrlCommon;
  feature: FeatureCommon;
}

export interface Url extends UrlCommon {
  result: ResultCommon;
}

export interface UrlExtended extends UrlCommon {
  results: ResultCommon[];
  similarUrls: UrlCommon[];
}

export interface Submission extends SubmissionCommon {
  results: ResultCommon[];
}

export interface SubmissionCreateResult {
  submissionId: number;
}
