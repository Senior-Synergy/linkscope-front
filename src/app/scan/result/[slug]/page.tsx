import Footer from "@/components/common/Footer";
import { FaChevronRight } from "react-icons/fa6";
import { Result } from "@/types/urlTypes";
import DetailedUrlList from "@/components/result/DetailedUrlList";
import axiosInstance from "../../../../utils/axiosInstance";

async function ScanResultPage({ params }: { params: { slug: string } }) {
  const submissionID = params.slug;
  const response = await axiosInstance.get<Result[]>(
    `/url/result/list/${submissionID}`
  );
  const results: Result[] = response.data;

  const safeItems = results.filter((result) => !result.is_phishing);
  const unsafeItems = results.filter((result) => result.is_phishing);

  return (
    <main className="flex flex-col p-4 md:p-8 gap-8">
      <header className="flex flex-col w-full gap-4">
        <h1 className="text-3xl font-bold">Results</h1>
      </header>

      <div>
        <h2 className="text-xl font-bold mb-4">Summary</h2>

        <div className="bg-gray-50 p-4 rounded-xl border">
          <p className="mb-4">
            All requested URLs has been successfully analyzed. A total of
            <span className="font-semibold"> {results.length} </span>
            URL(s) has been scanned.
            <span className="font-semibold"> {safeItems.length} </span> are
            identified as safe, while
            <span className="font-semibold"> {unsafeItems.length} </span>are
            identified potentially unsafe URLs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {safeItems.length > 0 && (
              <div className="flex flex-col w-full border border-green-500 rounded-lg overflow-hidden">
                <div className="bg-green-400 p-4">
                  <p className="text-white">
                    Classifed as<span className="font-semibold"> Safe</span>
                  </p>
                </div>
                <ul className="flex flex-col grow gap-2 p-2 bg-gray-100">
                  {safeItems.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg bg-white"
                    >
                      <p className="grow truncate">{result.submitted_url}</p>
                      <FaChevronRight className="w-5 h-5 fill-gray-400 shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {unsafeItems.length > 0 && (
              <div className="flex flex-col w-full border border-orange-500 rounded-lg overflow-hidden">
                <div className="bg-orange-400 p-4">
                  <p className="text-white">
                    Classifed as<span className="font-semibold"> Unsafe</span>
                  </p>
                </div>
                <ul className="flex flex-col grow gap-2 p-2 bg-gray-100">
                  {unsafeItems.map((result, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg bg-white"
                    >
                      <p className="grow truncate">{result.submitted_url}</p>
                      <FaChevronRight className="w-5 h-5 fill-gray-400 shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">URL Information</h2>
          <p className="text-gray-600">
            In-depth information about each URL scanned.
          </p>
        </div>

        <DetailedUrlList results={results} />
      </div>

      <Footer />
    </main>
  );
}

export default ScanResultPage;
