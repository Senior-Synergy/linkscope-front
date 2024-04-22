import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import Searcher from "@/components/search/Searcher";
import ResultList from "@/components/search/ResultList";

import { searchResults } from "@/services/linkscopeApi";
import { Result } from "@/types/urlTypes";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaSlash } from "react-icons/fa6";

async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const pageNumber = parseInt((searchParams["page"] as string) ?? 1);
  const searchQuery = (searchParams["query"] as string) ?? "";
  const sortOptions = (searchParams["sort"] as string) ?? "";

  let results: Result[] = [];
  let totalCount: number = 0;

  const fetchedData = await searchResults(
    searchQuery,
    pageNumber,
    10,
    sortOptions
  );

  if (fetchedData) {
    results = fetchedData.results;
    totalCount = fetchedData.totalCount;
  } else {
    // failed to fetch data...
  }

  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-semibold mb-1">SEARCH</h1>
        <p className="text-gray-500 font-extralight">{`Explore our database of previously scanned URLs using our Search feature.`}</p>
      </header>

      <section className="mt-8">
        <Searcher />
      </section>

      <section className="mt-8">
        {/* <h2 className="text-xl font-bold mb-4">Recent URLs</h2> */}

        <ResultList
          currentPage={pageNumber}
          totalCount={totalCount}
          results={results}
        />
      </section>
      <Footer />
    </MainWrapper>
  );
}

export default SearchPage;
