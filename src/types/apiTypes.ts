// ------------------- Base Models -------------------

export interface UrlBase {
  url_id: number;
  final_url: string;
  hostname: string;
  domain: string;
  subdomains: string[] | null;
  scheme: string[] | null;
  registrar: string[] | null;
  ip_address: string[] | null;
  creation_date: Date | null;
  expiration_date: Date | null;
  domainage: number | null;
  domainend: number | null;
  city: string | null;
  state: string | null;
  country: string | null;
  google_safe_browsing: boolean;
}

export interface ResultBase {
  result_id: number;
  submission_id: number | null;
  url_id: number | null;
  feature_id: number | null;
  submitted_url: string;
  phish_prob: number;
  verdict: string | null;
  trust_score: number | null;
  datetime_created: Date;
}

export interface FeatureBase {
  feature_id: number;
  domainlength: number;
  www: boolean;
  https: boolean;
  short_url: boolean;
  ip: boolean;
  dash_count: number;
  equal_count: number;
  dot_count: number;
  underscore_count: number;
  slash_count: number;
  digit_count: number;
  pc_emptylink: number | null;
  pc_extlink: number | null;
  pc_requrl: number | null;
  zerolink: boolean;
  ext_favicon: boolean;
  sfh: boolean;
  redirection: boolean;
  domainend: boolean;
  shortten_url: string | null;
  ip_in_url: string | null;
  empty_links_count: number;
  external_links: string[] | null;
  external_img_requrl: string[] | null;
  external_audio_requrl: string[] | null;
  external_embed_requrl: string[] | null;
  external_iframe_requrl: string[] | null;
  len_external_links: number;
  len_external_img_requrl: number;
  len_external_audio_requrl: number;
  len_external_embed_requrl: number;
  len_external_iframe_requrl: number;
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
  results: ResultResponse[];
}
