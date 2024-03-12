import RecentUrls from "@/components/common/RecentUrls";
import Searcher from "@/components/search/Searcher";

function SearchPage() {
  return (
    <main className="flex flex-col p-4 gap-4">
      <header>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Search URLs</h1>
          <p>
            {`Explore a vast database of previously scanned URLs using our Search
          feature. Navigate and retrieve valuable information by investigating a
          specific link with LinkScope's Search functionality.`}
          </p>
        </div>
      </header>

      <Searcher />

      <RecentUrls />

      <footer className="mt-8 text-gray-500 text-sm">
        <p>LinkScope | Senior Synergy</p>
      </footer>
    </main>
  );
}

export default SearchPage;
