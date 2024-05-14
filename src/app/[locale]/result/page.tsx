import { Suspense } from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import Searcher from "@/components/result/Searcher";
import SearchResultList from "@/components/result/SearchResultList";
import ResultListFallback from "@/components/result/ResultListFallback";

async function SearchPage({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("Result");

  const pageNumber = parseInt((searchParams["page"] as string) ?? 1);
  const searchQuery = (searchParams["query"] as string) ?? "";
  const sortOption = (searchParams["sort"] as string) ?? "";

  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-semibold mb-1">{t("header.title")}</h1>
        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate">
          {t("header.subtitle")}
        </p>
      </header>

      <section className="mt-8">
        <Searcher />
      </section>

      <section className="mt-8">
        <Suspense
          key={pageNumber}
          fallback={<ResultListFallback pageSize={10} />}
        >
          <SearchResultList
            pageNumber={pageNumber}
            searchQuery={searchQuery}
            sortOption={sortOption}
          />
        </Suspense>
      </section>

      <Footer />
    </MainWrapper>
  );
}

export default SearchPage;
