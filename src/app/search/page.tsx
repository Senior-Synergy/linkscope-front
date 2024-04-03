import Footer from "@/components/common/Footer";
import Searcher from "@/components/search/Searcher";
import UrlList from "@/components/search/UrlList";
import { Url } from "@/types/urlTypes";
import { generateUrlInfos } from "@/utils/generator";

function SearchPage() {
  const recentUrls: Url[] = generateUrlInfos(5);

  return (
    <main className="flex flex-col p-4 md:p-8 gap-8">
      <header>
        <h1 className="text-4xl font-bold">Search</h1>
        <p className="text-gray-500">{`Explore our database of previously scanned URLs using our Search feature.`}</p>
      </header>

      <div className="bg-gray-50 border p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Searcher</h2>
        <Searcher />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Recent URLs</h2>
        <UrlList urlList={recentUrls} />
      </div>

      <Footer />
    </main>
  );
}

export default SearchPage;
