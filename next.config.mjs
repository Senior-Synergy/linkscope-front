/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ["en-US", "th-TH",],
    defaultLocale: "en-US",
    domains: [],
  },
};

export default nextConfig;
