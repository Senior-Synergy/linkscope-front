import Footer from "@/components/common/Footer";
import { FaChevronRight } from "react-icons/fa6";

const ScanResultPage = ({ params }: { params: { slug: string } }) => {
  const scanId = params.slug;

  const summaryItems = [
    { title: "Total URL(s) submitted", value: 0 },
    { title: "Safe URL(s)", value: 0 },
    { title: "Potentially Unsafe URL(s)", value: 0 },
  ];

  const results = [
    {
      url: "https://www.test.com/1",
      phishProb: 0.75,
      isPhish: true,
      features: {
        mockOne: "",
        mockTrue: "",
        mockThree: "",
      },
    },
    {
      url: "https://www.test.com/2",
      phishProb: 0.01,
      isPhish: false,
      features: {
        mockOne: "",
        mockTrue: "",
        mockThree: "",
      },
    },
    {
      url: "https://www.test.com/3",
      phishProb: 0.99,
      isPhish: true,
      features: {
        mockOne: "",
        mockTrue: "",
        mockThree: "",
      },
    },
  ];

  return (
    <main className="flex flex-col p-6 md:p-8 gap-8">
      <header className="flex flex-col w-full gap-4">
        <h1 className="text-3xl font-bold">Result</h1>
        <p>
          All requested URLs has been successfully analyzed. A total of # URL(s)
          has been scanned. # are identified as safe, while # are identified
          potentially unsafe URLs. Here are the results:
        </p>
      </header>

      <div>
        <h2 className="text-xl font-bold mb-4">Summarized Report</h2>

        <div className="bg-white p-4 rounded-xl border">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex flex-col w-full sm:w-1/2 border border-green-500 rounded-lg overflow-hidden">
              <div className="bg-green-400 p-4">
                <p className="text-white">
                  Potentially<span className="font-semibold"> Safe</span>
                </p>
              </div>
              <ul className="flex flex-col grow gap-2 p-2 bg-gray-50">
                {results
                  .filter((result) => !result.isPhish)
                  .map((result, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg bg-white"
                    >
                      <p className="grow truncate">{result.url}</p>
                      <FaChevronRight className="w-5 h-5 fill-gray-400 shrink-0" />
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex flex-col w-full sm:w-1/2 border border-orange-500 rounded-lg overflow-hidden">
              <div className="bg-orange-400 p-4">
                <p className="text-white">
                  Potentially<span className="font-semibold"> Unsafe</span>
                </p>
              </div>
              <ul className="flex flex-col grow gap-2 p-2 bg-gray-50">
                {results
                  .filter((result) => result.isPhish)
                  .map((result, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 p-4 border rounded-lg bg-white"
                    >
                      <p className="grow truncate">{result.url}</p>
                      <FaChevronRight className="w-5 h-5 fill-gray-400 shrink-0" />
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full">
              <tbody className="divide-y">
                {summaryItems.map((item, index) => (
                  <tr key={index} className="divide-x">
                    <td className="px-4 py-2 font-medium bg-gray-50">
                      {item.title}
                    </td>
                    <td className="px-4 py-2 font-medium bg-gray-100 text-center">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Scanned URL Information</h2>
        <p className="mb-4">In-depth information about each URL scanned.</p>
        <div className="flex flex-col w-full gap-4 p-4 rounded-xl bg-white border">
          Coming soon...
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ScanResultPage;
