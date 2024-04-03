export interface UrlSelectorItem {
  url: string;
  isSelected: boolean;
}

export interface Url {
  urlID: number;
  finalURL: string;
  latestResult: UrlResult;
  dateUpdated: Date;
}

export interface UrlInfo extends Url {
  results: UrlResult[];
}

export interface UrlResult {
  urlID: number;
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

export interface UrlInfo {
  final_url: string;
  hostname: string;
  domain: string;
  subdomains: string | null;
  scheme: string;
  creation_date: string;
  expiration_date: string;
  domainage: number;
  domainend: number;
  city: string | null;
  state: string;
  country: string;
}

export interface Feature {
  domainlength: number;
  www: boolean;
  subdomain: boolean;
  https: boolean;
  http: boolean;
  short_url: boolean;
  ip: boolean;
  at_count: number;
  dash_count: number;
  equal_count: number;
  dot_count: number;
  underscore_count: number;
  slash_count: number;
  digit_count: number;
  log_contain: boolean;
  pay_contain: boolean;
  web_contain: boolean;
  cmd_contain: boolean;
  account_contain: boolean;
  pc_emptylink: number;
  pc_extlink: number;
  pc_requrl: number;
  zerolink: boolean;
  ext_favicon: boolean;
  submit_to_email: boolean;
  sfh: boolean;
  redirection: boolean;
  domainage: boolean;
  domainend: boolean;
  shortten_url: string | null;
  ip_in_url: string | null;
  len_empty_links: number;
  external_links: string | null;
  len_external_links: number;
  external_img_requrl: string | null;
  external_audio_requrl: string | null;
  external_embed_requrl: string | null;
  external_iframe_requrl: string | null;
  len_external_img_requrl: number;
  len_external_audio_requrl: number;
  len_external_embed_requrl: number;
  len_external_iframe_requrl: number;
}

export interface Result {
  url_id: number;
  submitted_url: string;
  phish_prob: number;
  is_phishing: boolean;
  datetime_created: string;
  url: UrlInfo;
  feature: Feature;
}
