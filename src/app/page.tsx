import Link from "next/link";

import UrlList from "@/components/search/UrlList";
import Button from "@/components/common/Button";
import Footer from "@/components/common/Footer";
import { Url } from "@/types/urlTypes";
import { generateUrlInfos } from "@/utils/generator";
import Scanner from "@/components/scanner/Scanner";

const HomePage = () => {
  const urlInfos: Url[] = generateUrlInfos(5);

  return (
    <main className="flex flex-col p-4 md:p-8 gap-8">
      <div>
        <h1 className="text-4xl font-bold">
          Introducing,<span className="text-primary"> LINKSCOPE</span>
        </h1>
        <p className="text-gray-600 font-light">ML-Powered URL Scanner</p>
      </div>

      <Scanner />

      {/* <div>
        <h2 className="text-xl font-bold mb-4">Quick Start</h2>
        <p className="mb-4">
          Copy and paste text that contain URLs and start analyzing it now!
        </p>
        <div className="flex flex-col w-full gap-4 p-4 rounded-xl bg-gray-100 border">
          Coming soon...
        </div>
      </div> */}

      <div>
        <h2 className="text-xl font-bold mb-4">Recently Scanned URLs</h2>

        <div>
          <UrlList urlList={urlInfos} />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default HomePage;
