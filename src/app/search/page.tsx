import Footer from "@/components/common/Footer";
import RecentUrls from "@/components/common/RecentUrls";
import Searcher from "@/components/search/Searcher";

function SearchPage() {
  return (
    <main className="flex flex-col p-4 gap-4">
      <header>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Search URLs</h1>
          <p>
            {`Explore our database of previously scanned URLs using our Search
          feature.`}
          </p>
        </div>
      </header>

      <Searcher />

      <RecentUrls />

      <Footer />
    </main>
  );
}

export default SearchPage;
