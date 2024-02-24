export const featureInformation: Record<
  string,
  {
    featureName: string;
    dataType: string;
    sampleValue: string;
    explanation: string;
  }
> = {
  domainLength: {
    featureName: "Domain Length",
    dataType: "Float",
    sampleValue: "15.00",
    explanation: "Number of characters in the domain name.",
  },
  hasWwwSubdomain: {
    featureName: "Has 'WWW' Subdomain",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL has a www subdomain.",
  },
  hasMultipleSubdomains: {
    featureName: "Has Multiple Subdomains",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL has multiple subdomains.",
  },
  usesHttps: {
    featureName: "Uses Https",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL uses HTTPS.",
  },
  usesHttp: {
    featureName: "Uses Http",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL uses HTTP.",
  },
  isShortUrl: {
    featureName: "Is Short Url",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL is a short URL.",
  },
  containsIpAddress: {
    featureName: "Contains Ip Address",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL contains an IP address.",
  },
  atCount: {
    featureName: "At Count",
    dataType: "Integer",
    sampleValue: "5",
    explanation: "Count of @ characters in the URL.",
  },
  hyphenCount: {
    featureName: "Hyphen Count",
    dataType: "Integer",
    sampleValue: "3",
    explanation: "Count of - characters in the URL.",
  },
  equalCount: {
    featureName: "Equal Count",
    dataType: "Integer",
    sampleValue: "2",
    explanation: "Count of = characters in the URL.",
  },
  dotCount: {
    featureName: "Dot Count",
    dataType: "Integer",
    sampleValue: "4",
    explanation: "Count of . characters in the URL.",
  },
  underscoreCount: {
    featureName: "Underscore Count",
    dataType: "Integer",
    sampleValue: "1",
    explanation: "Count of _ characters in the URL.",
  },
  slashCount: {
    featureName: "Slash Count",
    dataType: "Integer",
    sampleValue: "3",
    explanation: "Count of / characters in the URL.",
  },
  digitCount: {
    featureName: "Digit Count",
    dataType: "Integer",
    sampleValue: "2",
    explanation: "Count of digits (0-9) in the URL.",
  },
  containsLogWord: {
    featureName: "Contains Log Word",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL contains the word 'log'.",
  },
  containsPayWord: {
    featureName: "Contains Pay Word",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL contains the word 'pay'.",
  },
  containsWebWord: {
    featureName: "Contains Web Word",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL contains the word 'web'.",
  },
  containsCmdWord: {
    featureName: "Contains Cmd Word",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL contains the word 'cmd'.",
  },
  containsAccountWord: {
    featureName: "Contains Account Word",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL contains the word 'account'.",
  },
  percentageEmptyLinks: {
    featureName: "Percentage Empty Links",
    dataType: "Float",
    sampleValue: "12.00",
    explanation:
      "Percentage of links that do not lead to another page (empty links).",
  },
  percentageExternalLinks: {
    featureName: "Percentage External Links",
    dataType: "Float",
    sampleValue: "15.00",
    explanation:
      "Percentage of links that lead to an external page with a different domain from the submitted URL.",
  },
  percentageExternalResourcesUrl: {
    featureName: "Percentage External Resources Url",
    dataType: "Float",
    sampleValue: "16.00",
    explanation:
      "Percentage of external resource URLs (images, audio, embed) with a different domain from the submitted URL.",
  },
  hasZeroLink: {
    featureName: "Has Zero Link",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation: "Indicates whether the URL page has zero links in the body.",
  },
  hasDifferentFaviconDomain: {
    featureName: "Has Different Favicon Domain",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation:
      "Indicates whether the favicon (icon) URL has a different domain from the submitted URL.",
  },
  hasSubmitToEmail: {
    featureName: "Has Submit To Email",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation:
      "Indicates whether the HTML page contains email submission patterns (e.g., mailto:).",
  },
  isSfh: {
    featureName: "Is Sfh",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation:
      "Indicates whether the SFH (Server Form Handler) is empty or leads to a different domain site.",
  },
  hasRedirection: {
    featureName: "Has Redirection",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation:
      "Indicates whether clicking the submitted URL results in redirection to another URL.",
  },
  isDomainAgeLessThan6Months: {
    featureName: "Is Domain Age Less Than 6 Months",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation:
      "Indicates whether the difference between the domain's expiration time and creation time is less than 6 months.",
  },
  isDomainEndLessThanOrEqual1Year: {
    featureName: "Is Domain End Less Than Or Equal 1 Year",
    dataType: "Boolean",
    sampleValue: "false, true",
    explanation:
      "Indicates whether the difference between today's time and the domain's expiration time (registration length) is less than or equal to 1 year.",
  },
};

export const dummyFeatureInformation = {
  modelResults: {
    verdict: 1,
    probabilityOfPhishUrl: 98.21,
  },
  urlDetails: {
    actualUrl: "https://www.example.com",
  },
  extractedFeatures: {
    domainLength: 12.0,
    hasWwwSubdomain: false,
    hasMultipleSubdomains: false,
    usesHttps: true,
    usesHttp: false,
    isShortUrl: false,
    containsIpAddress: false,
    atCount: 2,
    hyphenCount: 1,
    equalCount: 0,
    dotCount: 2,
    underscoreCount: 0,
    slashCount: 1,
    digitCount: 3,
    containsLogWord: false,
    containsPayWord: true,
    containsWebWord: true,
    containsCmdWord: false,
    containsAccountWord: false,
    percentageEmptyLinks: 10.5,
    percentageExternalLinks: 25.0,
    percentageExternalResourcesUrl: 30.0,
    hasZeroLink: false,
    hasDifferentFaviconDomain: true,
    hasSubmitToEmail: false,
    isSfh: true,
    hasRedirection: true,
    isDomainAgeLessThan6Months: false,
    isDomainEndLessThanOrEqual1Year: true,
  },
};
