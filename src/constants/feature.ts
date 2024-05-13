export const featureInformation: Record<
  string,
  {
    featureName: string;
    featureTypes: string;
    explanation: string;
    note: string;
  }
> = {
  domainLength: {
    featureName: "Domain Length",
    featureTypes: "Address Bar",
    explanation: "Count the characters in the hostname string.",
    note: "",
  },
  www: {
    featureName: "WWW",
    featureTypes: "Address Bar",
    explanation:
      "If the URL has 'www' as the subdomain, then true; otherwise, false.",
    note: "",
  },
  https: {
    featureName: "HTTPS",
    featureTypes: "Address Bar",
    explanation:
      "Address Bar based If the URL contains 'https', then true; otherwise, false.",
    note: "",
  },
  shortUrl: {
    featureName: "Short URL",
    featureTypes: "Address Bar",
    explanation: "If the URL is a short URL, false; otherwise, true.",
    note: "",
  },
  ip: {
    featureName: "IP",
    featureTypes: "Address Bar",
    explanation:
      "If the URL contains an 'IP address', false; otherwise, true.",
    note: "",
  },
  dashCount: {
    featureName: "Dash Symbol Counts",
    featureTypes: "Address Bar",
    explanation: "Count the '-' characters in the URL.",
    note: "",
  },
  equalCount: {
    featureName: "Equal Symbol Counts",
    featureTypes: "Address Bar",
    explanation: "Count the '=' characters in the URL.",
    note: "",
  },
  dotCount: {
    featureName: "Dot Symbol Counts",
    featureTypes: "Address Bar",
    explanation: "Count the '.' characters in the URL's hostname.",
    note: "",
  },
  underscoreCount: {
    featureName: "Underscore Symbol Counts",
    featureTypes: "Address Bar",
    explanation: "Count the '_' characters in the URL.",
    note: "",
  },
  slashCount: {
    featureName: "Slash Symbol Counts",
    featureTypes: "Address Bar",
    explanation: "Count the '/' characters in the URL.",
    note: "",
  },
  digitCount: {
    featureName: "Digit",
    featureTypes: "Address Bar",
    explanation: "Count the digit (0-9) characters in the URL.",
    note: "",
  },
  pcemptylinks: {
    featureName: "PC Empty Links",
    featureTypes: "HTML/DOM Structure",
    explanation: "Percentage of empty links.",
    note: "An empty link is a hyperlink that does not lead to a different web page. When clicked, it typically results in staying on the current page or displaying a blank page. This can occur when the link's URL is missing or invalid.",
  },
  pcextlinks: {
    featureName: "PC External Links",
    featureTypes: "HTML/DOM Structure",
    explanation:
      "Percentage of external links that direct you to another site with a different domain from the submitted URL.",
    note: "Note : An external link is a hyperlink that directs users from one website to a different website with a different domain. When clicked, the link takes the user away from the current site and navigates them to a new site.",
  },
  pcrequrl: {
    featureName: "PC External Resources URL",
    featureTypes: "HTML/DOM Structure",
    explanation: "Percentage of external resource URLs.",
    note: "Note: An external resource URL refers to the web address of a resource, such as images, audio files, or embedded content, that is hosted on a different domain from the main or submitted URL.",
  },
  zerolink: {
    featureName: "Zero Link",
    featureTypes: "HTML/DOM Structure",
    explanation:
      "If the favicon URL is from a different domain than the submitted URL, false; otherwise, true.",
    note: "",
  },
  extFavicon: {
    featureName: "External Favicon",
    featureTypes: "HTML/DOM Structure",
    explanation:
      "If the favicon URL is from a different domain than the submitted URL, false; otherwise, true.",
    note: "",
  },
  sfh: {
    featureName: "SFH",
    featureTypes: "HTML/DOM Structure",
    explanation:
      "SFHs (server-side form handlers) that contain an empty string or lead to different domain sites from the submitted URL should false; otherwise, true.",
    note: "Note: SFH stands for server-side form handler, which is the URL specified in the `action` attribute of an HTML form. This URL determines where the form data will be submitted for processing when a user fills out and submits the form.",
  },
  redirection: {
    featureName: "Redirection",
    featureTypes: "Abnormal",
    explanation:
      "If clicking the submitted URL results in a redirection to another URL, false; otherwise, true. For example, clicking www.eabc1255.com and being redirected to www.eabc5255.com.",
    note: "",
  },
  domainend: {
    featureName: "Domain End",
    featureTypes: "Domain",
    explanation:
      "Calculate the difference in days between the current date and the expiration date (registration length). If the difference is less than or equal to one year, false; otherwise, true.",
    note: "",
  },
};

export const featureInformationTable: Record<
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
    featureName: "Server Form Handler",
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
