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
  hostname: string;
  domain: string;
  subdomains: string[] | null;
  registrar: string[] | null;
  ipAddress: string[] | null;
  scheme: string[] | null;
  creationDate: Date | null;
  expirationDate: Date | null;
  domainAge: number | null;
  domainEnd: number | null;
  city: string | null;
  state: string | null;
  country: string | null;
  googleSafeBrowsing: boolean;
}

export interface ResultCommon {
  resultId: number;
  submissionId: number | null;
  urlId: number | null;
  featureId: number | null;
  submittedUrl: string;
  phishProb: number;
  verdict: string | null;
  trustScore: number | null;
  datetimeCreated: Date;
}

export interface FeatureCommon {
  featureId: number;
  domainLength: number;
  www: boolean;
  https: boolean;
  shortUrl: boolean;
  ip: boolean;
  dashCount: number;
  equalCount: number;
  dotCount: number;
  underscoreCount: number;
  slashCount: number;
  digitCount: number;
  pcEmptylink: number | null;
  pcExtlink: number | null;
  pcRequrl: number | null;
  zerolink: boolean;
  extFavicon: boolean;
  sfh: boolean;
  redirection: boolean;
  domainEnd: boolean;
  shorttenUrl: string | null;
  ipInUrl: string | null;
  lenEmptyLinks: number;
  lenExternalLinks: number;
  externalLinks: string[] | null;
  externalImgRequrl: string[] | null;
  externalAudioRequrl: string[] | null;
  externalEmbedRequrl: string[] | null;
  externalIframeRequrl: string[] | null;
  lenExternalImgRequrl: number;
  lenExternalAudioRequrl: number;
  lenExternalEmbedRequrl: number;
  lenExternalIframeRequrl: number;
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
}

export interface Submission extends SubmissionCommon {
  results: ResultCommon[];
}

export interface SubmissionCreateResult {
  submissionId: number;
}
