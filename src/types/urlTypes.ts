export interface UrlSelectorItem {
  url: string;
  isSelected: boolean;
}

export interface Url {
  urlID: number;
}

export interface UrlInfo extends Url {
  finalURL: string;
  dateUpdated: Date;
}

export interface UrlResult extends Url {
  resultID: number;
  submissionID: number;
  submittedURL: string;
  phishProb: number;
  isPhish: boolean;
  dateCreated: Date;
}

export interface Submission {
  submissionID: number;
  dateCreated: Date;
}

export interface UrlFeature {
  featureID: number;
  domainLength: number;
  www: boolean;
  subdomain: number;
  https: number;
  http: number;
  isShort: boolean;
  ip: number;
  atCount: number;
  dashCount: number;
  equalCount: number;
  dotCount: number;
  underscoreCount: number;
  slashCount: number;
  digitCount: number;
  logContain: number;
  payContain: number;
  webContain: number;
  cmdContain: number;
  accountContain: number;
  pcEmptylink: number;
  pcExtlink: number;
  pcRequrl: number;
  zerolink: number;
  extFavicon: number;
  submitToEmail: number;
  sfh: number;
  redirection: number;
  domainAge: number;
  domainEnd: number;
}
