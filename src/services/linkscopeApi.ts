import {
  FeatureBase,
  ResultBase,
  ResultExtendedResponse,
  ResultResponse,
  SubmissionCreateRequest,
  SubmissionResponse,
  UrlBase,
  UrlExtendedResponse,
  UrlSearchRequest,
  UrlSearchResponse,
} from "@/types/apiTypes";
import {
  FeatureCommon,
  Result,
  ResultCommon,
  ResultExtended,
  UrlCommon,
  UrlExtended,
} from "@/types/urlTypes";
import apiInstance from "@/utils/axiosInstance";

export async function searchResults(
  keyword: string,
  page: number,
  pageSize: number,
  sortOption?: string
) {
  let sortBy = "datetime_created";
  let sortDirection = "desc";

  if (sortOption) {
    switch (sortOption) {
      case "A-D":
        sortBy = "submitted_url";
        sortDirection = "desc";
      case "A-A":
        sortBy = "submitted_url";
        sortDirection = "asc";
      case "D-D":
        sortBy = "datetime_created";
        sortDirection = "desc";
      case "D-A":
        sortBy = "datetime_created";
        sortDirection = "asc";
      default:
    }
  }

  const req: UrlSearchRequest = {
    keyword: keyword,
    page: page,
    page_size: pageSize,
    creation_date_start: null,
    creation_date_end: null,
    phish_prob_min: null,
    phish_prob_max: null,
    country: null,
    sort_by: sortBy,
    sort_direction: sortDirection,
  };

  return apiInstance
    .post<UrlSearchResponse>("/v3/result/result-list/search", req)
    .then((res) => {
      const data = res.data;
      const results = data.results.map((result) => mapResultResponse(result));

      return {
        totalCount: data.total_count,
        results: results,
      };
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
}

export async function createSubmission(urls: string[]) {
  const req: SubmissionCreateRequest = { urls: urls };

  return apiInstance
    .post<SubmissionResponse>("/v3/submission/create", req)
    .then((res) => {
      return {
        submissionId: res.data.submission_id,
      };
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
}

export function getResult(resultId: number) {
  return apiInstance
    .get<ResultExtendedResponse>(`/v3/result/${resultId}`)
    .then((res) => {
      const data = mapResultExtendedResponse(res.data);
      return data;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
}

export function getUrl(urlId: number) {
  return apiInstance
    .get<UrlExtendedResponse>(`/v3/url/url-info/${urlId}`)
    .then((res) => {
      const data = mapUrlExtendedResponse(res.data);
      return data;
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
}

export function getSubmissionResults(submissionId: number) {
  return apiInstance
    .get<SubmissionResponse>(`/v3/submission/${submissionId}`)
    .then((res) => {
      const data = res.data;
      const results = data.results.map((result) => mapResultResponse(result));
      return {
        submissionId: data.submission_id,
        dateSubmitted: data.datetime_submitted,
        results: results,
      };
    })
    .catch((e) => {
      console.error(e);
      return null;
    });
}

// ------------------------------------ mapping functions ------------------------------------

function mapResultResponse(result: ResultResponse): Result {
  return {
    ...mapResultBase(result),
    url: { ...mapUrlBase(result.url) },
  };
}

function mapResultExtendedResponse(
  result: ResultExtendedResponse
): ResultExtended {
  return {
    ...mapResultResponse(result),
    feature: { ...mapFeatureBase(result.feature) },
  };
}

function mapUrlExtendedResponse(url: UrlExtendedResponse): UrlExtended {
  return {
    ...mapUrlBase(url),
    results: url.results.map((result) => ({ ...mapResultBase(result) })),
  };
}

function mapFeatureBase(feature: FeatureBase): FeatureCommon {
  return {
    featureId: feature.feature_id,
    domainLength: feature.domainlength,
    www: feature.www,
    https: feature.https,
    shortUrl: feature.short_url,
    ip: feature.ip,
    dashCount: feature.dash_count,
    equalCount: feature.equal_count,
    dotCount: feature.dot_count,
    underscoreCount: feature.underscore_count,
    slashCount: feature.slash_count,
    digitCount: feature.digit_count,
    pcEmptylink: feature.pc_emptylink,
    pcExtlink: feature.pc_extlink,
    pcRequrl: feature.pc_requrl,
    zerolink: feature.zerolink,
    extFavicon: feature.ext_favicon,
    sfh: feature.sfh,
    redirection: feature.redirection,
    domainEnd: feature.domainend,
    shorttenUrl: feature.shortten_url,
    ipInUrl: feature.ip_in_url,
    lenEmptyLinks: feature.empty_links_count,
    lenExternalLinks: feature.len_external_links,
    externalLinks: feature.external_links,
    externalImgRequrl: feature.external_img_requrl,
    externalAudioRequrl: feature.external_audio_requrl,
    externalEmbedRequrl: feature.external_embed_requrl,
    externalIframeRequrl: feature.external_iframe_requrl,
    lenExternalImgRequrl: feature.len_external_img_requrl,
    lenExternalAudioRequrl: feature.len_external_audio_requrl,
    lenExternalEmbedRequrl: feature.len_external_embed_requrl,
    lenExternalIframeRequrl: feature.len_external_iframe_requrl,
  };
}

function mapUrlBase(url: UrlBase): UrlCommon {
  return {
    urlId: url.url_id,
    finalUrl: url.final_url,
    hostname: url.hostname,
    domain: url.domain,
    subdomains: url.subdomains,
    scheme: url.scheme,
    registrar: url.registrar,
    ipAddress: url.ip_address,
    creationDate: url.creation_date ? new Date(url.creation_date) : null,
    expirationDate: url.expiration_date ? new Date(url.expiration_date) : null,
    domainAge: url.domainage,
    domainEnd: url.domainend,
    city: url.city,
    state: url.state,
    country: url.country,
    googleSafeBrowsing: url.google_safe_browsing,
  };
}

function mapResultBase(result: ResultBase): ResultCommon {
  return {
    resultId: result.result_id,
    submissionId: result.submission_id,
    urlId: result.url_id,
    featureId: result.feature_id,
    submittedUrl: result.submitted_url,
    phishProb: result.phish_prob,
    verdict: result.verdict,
    trustScore: result.trust_score,
    datetimeCreated: new Date(result.datetime_created),
  };
}

// ------------------------------------ generator functions ------------------------------------

/*
function generateDefaultResult(): Result {
  return {
    resultId: 0,
    submissionId: 0,
    urlId: 0,
    featureId: 0,
    submittedUrl: "",
    phishProb: 0,
    datetimeCreated: new Date(),
    url: {
      urlId: 0,
      finalUrl: "",
      hostname: "",
      domain: "",
      subdomains: null,
      scheme: null,
      creationDate: new Date(),
      expirationDate: null,
      domainAge: null,
      domainEnd: null,
      city: null,
      state: null,
      country: null,
    },
  };
}

function generateDefaultResultExtended(): ResultExtended {
  return {
    resultId: 0,
    submissionId: 0,
    urlId: 0,
    featureId: 0,
    submittedUrl: "",
    phishProb: 0,
    datetimeCreated: new Date(),
    url: {
      urlId: 0,
      finalUrl: "",
      hostname: "",
      domain: "",
      subdomains: null,
      scheme: null,
      creationDate: null,
      expirationDate: null,
      domainAge: null,
      domainEnd: null,
      city: null,
      state: null,
      country: null,
    },
    feature: {
      featureId: 0,
      domainLength: 0,
      www: false,
      https: false,
      shortUrl: false,
      ip: false,
      dashCount: 0,
      equalCount: 0,
      dotCount: 0,
      underscoreCount: 0,
      slashCount: 0,
      digitCount: 0,
      pcEmptylink: null,
      pcExtlink: null,
      pcRequrl: null,
      zerolink: false,
      extFavicon: false,
      sfh: false,
      redirection: false,
      domainEnd: false,
      shorttenUrl: null,
      ipInUrl: null,
      lenEmptyLinks: 0,
      lenExternalLinks: 0,
      externalLinks: null,
      externalImgRequrl: null,
      externalAudioRequrl: null,
      externalEmbedRequrl: null,
      externalIframeRequrl: null,
      lenExternalImgRequrl: 0,
      lenExternalAudioRequrl: 0,
      lenExternalEmbedRequrl: 0,
      lenExternalIframeRequrl: 0,
    },
  };
}
*/
