// ------------------- Base Models -------------------

export interface UrlBase {
  url_id: number;
  final_url: string;
  hostname: string | null;
  domain: string | null;
  subdomains: string[] | null;
  scheme: string | null;
  registrar: string | null;
  ip_address: string | null;

  // ---------------------------------

  creation_date: Date | null;
  expiration_date: Date | null;
  domainage: number | null;
  domainend: number | null;
  city: string | null;
  state: string | null;
  country: string | null;
  google_is_malicious: boolean | null;

  // ---------------------------------

  updated_date: Date;
}

export interface ResultBase {
  result_id: number;
  submission_id: number;
  url_id: number;
  feature_id: number;
  submitted_url: string;
  phish_prob: number;
  phish_prob_mod: number;
  has_soup: boolean;
  datetime_created: Date;
}

export interface FeatureBase {
  feature_id: number;
  domainlength: number | null;
  www: boolean | null;
  subdomain: boolean | null;
  https: boolean | null;
  short_url: boolean | null;
  at_count: number | null;
  dash_count: number | null;
  equal_count: number | null;
  dot_count: number | null;
  underscore_count: number | null;
  slash_count: number | null;
  digit_count: number | null;
  log_count: number | null;
  pay_count: number | null;
  web_count: number | null;
  account_count: number | null;
  pc_emptylink: number | null;
  pc_extlink: number | null;
  pc_requrl: number | null;
  zerolink: boolean | null;
  ext_favicon: boolean | null;
  submit2Email: boolean | null;
  sfh: boolean | null;
  redirection: boolean | null;
  domainage: boolean | null;
  domainend: boolean | null;

  // ---------------------------------

  shortten_url: string | null;
  ip_in_url: string | null;
  empty_links_count: number;
  external_links: string[] | null;
  external_img_requrl: string[] | null;
  external_audio_requrl: string[] | null;
  external_embed_requrl: string[] | null;
  external_iframe_requrl: string[] | null;
  len_external_links: number | null;
  len_external_img_requrl: number | null;
  len_external_audio_requrl: number | null;
  len_external_embed_requrl: number | null;
  len_external_iframe_requrl: number | null;
}

export interface SubmissionBase {
  submission_id: number;
  datetime_submitted: Date;
}

// ------------------- API function common return type -------------------

export interface FetchResult<T> {
  status: number;
  data: T;
}

// ------------------- API request body and response -------------------

export interface UrlResponse extends UrlBase {
  result: ResultBase;
}

export interface UrlExtendedResponse extends UrlBase {
  results: ResultBase[];
  similar_urls: UrlBase[];
}

export interface ResultResponse extends ResultBase {
  url: UrlBase;
}

export interface ResultExtendedResponse extends ResultBase {
  url: UrlBase;
  feature: FeatureBase;
}

export interface SubmissionResponse extends SubmissionBase {
  results: ResultResponse[];
}

export interface SubmissionCreateRequest {
  urls: string[];
}

export interface SubmissionCreateResponse {
  submission_id: number;
}

export interface UrlSearchRequest {
  keyword: string;
  page?: number;
  page_size?: number;
  creation_date_start?: Date | null;
  creation_date_end?: Date | null;
  phish_prob_min?: number | null;
  phish_prob_max?: number | null;
  country?: string | null;
  sort_by?: string | null;
  sort_direction?: string | null;
}

export interface UrlSearchResponse {
  total_count: number;
  urls: UrlBase[];
}

export interface UrlResultsResponse {
  total_count: number;
  results: ResultBase[];
}

export interface ResultSearchRequest {
  keyword: string;
  page?: number;
  page_size?: number;
  creation_date_start?: Date | null;
  creation_date_end?: Date | null;
  phish_prob_min?: number | null;
  phish_prob_max?: number | null;
  country?: string | null;
  sort_by?: string | null;
  sort_direction?: string | null;
}

export interface ResultSearchResponse {
  total_count: number;
  results: ResultResponse[];
}
