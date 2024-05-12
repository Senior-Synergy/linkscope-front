import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import Searcher from "@/components/search/Searcher";

import { Suspense } from "react";
import SearchResultList from "@/components/search/SearchResultList";
import ResultListSuspense from "@/components/search/ResultListSuspense";

async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageNumber = parseInt((searchParams["page"] as string) ?? 1);
  const searchQuery = (searchParams["query"] as string) ?? "";
  const sortOption = (searchParams["sort"] as string) ?? "";

  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-semibold mb-1">Results</h1>
        <p className="text-gray-500 font-extralight">
          Explore our database of previously created scan results.
        </p>
      </header>

      <section className="mt-8">
        <Searcher />
      </section>

      <section className="mt-8">
        <Suspense key={pageNumber} fallback={<ResultListSuspense />}>
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
