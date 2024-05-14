import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import Scanner from "@/components/scanner/Scanner";

function ScanPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t_common = useTranslations("Common");
  const t = useTranslations("Index");

  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-semibold">
          {t("header.title-1")},
          <span className="text-primary"> {t_common("linkscope")}</span>
        </h1>
        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate">
          {t("header.subtitle")}
        </p>
      </header>

      <div className="mt-8">
        <Scanner />
      </div>

      <Footer />
    </MainWrapper>
  );
}

export default ScanPage;

// export async function generateMetadata({
//   params: { locale },
// }: {
//   params: { locale: string };
// }) {
//   const t = await getTranslations({ locale, namespace: "Metadata" });

//   return {
//     title: t("title"),
//   };
// }
