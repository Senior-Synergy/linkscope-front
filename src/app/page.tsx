import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import Scanner from "@/components/scanner/Scanner";

function ScanPage() {
  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-semibold">
          INTRODUCING,<span className="text-primary"> LINKSCOPE</span>
        </h1>
        <p className="text-gray-800 dark:text-gray-200 font-extralight truncate">
          AI Powered URL Scanner
        </p>
      </header>

      <div className="mt-8">
        <Scanner />
      </div>

      <Footer />
    </MainWrapper>
  );
}

export default ScanPage;
