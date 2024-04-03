import UrlList from "@/components/search/UrlList";
import { Url } from "@/types/urlTypes";
import { generateUrl, generateUrlInfos } from "@/utils/generator";

const UrlPage = ({ params }: { params: { slug: string } }) => {
  const scanId = params.slug;

  const url: Url = generateUrl();

  // const url: Url = undefined;

  const urlInfos: Url[] = generateUrlInfos(5);

  return (
    <main className="flex flex-col p-6 md:p-8 gap-8">
      <header className="flex flex-col w-full gap-4">
        <h1 className="text-3xl font-bold">{url.finalURL}</h1>
        {/* <p>{`Detailed Information of URLID: ${scanId}`}</p> */}
      </header>

      <div>
        <h2 className="text-xl font-bold mb-4">Information</h2>

        <div className="bg-gray-50 p-4 rounded-xl border">
          <div className="flex flex-col sm:flex-row gap-4 mb-4"></div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Scans</h2>

        <UrlList urlList={urlInfos} />
      </div>
    </main>
  );
};

export default UrlPage;
