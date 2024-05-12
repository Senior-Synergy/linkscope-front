import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FaChevronRight } from "react-icons/fa6";

import CountryFlag from "@/components/common/CountryFlag";
import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import Paginator from "@/components/common/Paginator";
import { searchUrls } from "@/services/linkscopeApi";
import SearchUrlGrid from "@/components/url/SearchUrlGrid";
import UrlGridFallback from "@/components/url/UrlGridFallback";

async function UrlPage({
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
        <h1 className="text-4xl font-semibold mb-1">URLs</h1>
        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate">
          Explore our database of previously scanned URLs.
        </p>
      </header>

      <div className="mx-auto mt-4">
        <Suspense key={pageNumber} fallback={<UrlGridFallback pageSize={12} />}>
          <SearchUrlGrid
            pageNumber={pageNumber}
            searchQuery={searchQuery}
            sortOption={sortOption}
          />
        </Suspense>
      </div>

      <Footer />
    </MainWrapper>
  );
}

export default UrlPage;
