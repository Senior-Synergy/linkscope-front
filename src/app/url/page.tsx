import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import ResultListPaginator from "@/components/search/ResultListPaginator";
import React, { Suspense } from "react";

async function UrlPage() {
  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-semibold mb-1">URLs</h1>
        <p className="text-gray-500 font-extralight">
          Explore our database of previously scanned URLs.
        </p>
      </header>

      <div className="mx-auto mt-4">
        <Suspense fallback={<UrlGridFallback />}>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 p-4 h-20 min-w-72 min-h-36 border rounded-lg"
                >
                  <div className="flex flex-col">
                    <div className="h-4 w-56 bg-gray-300 rounded-full animate-pulse" />
                    <div className="h-4 w-32 mt-2 bg-gray-200 rounded-full animate-pulse" />
                  </div>
                </div>
              ))}
          </section>

          <ResultListPaginator pageSize={12} totalCount={12} />
        </Suspense>
      </div>

      <Footer />
    </MainWrapper>
  );
}

export default UrlPage;

function UrlGridFallback() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 p-4 h-20 min-w-72 min-h-36 border rounded-lg"
          >
            <div className="flex flex-col">
              <div className="h-4 w-56 bg-gray-300 rounded-full animate-pulse" />
              <div className="h-4 w-32 mt-2 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        ))}
    </section>
  );
}
