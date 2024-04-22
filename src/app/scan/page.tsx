import Footer from "@/components/common/Footer";
import MainWrapper from "@/components/common/wrapper/MainWrapper";
import Scanner from "@/components/scanner/Scanner";

const ScanPage = () => {
  return (
    <>
      <MainWrapper>
        <header>
          <h1 className="text-4xl text-primary font-semibold">
            <span className="text-black">INTRODUCING, </span>LINKSCOPE
          </h1>
          <p className="text-xl text-gray-500 font-extralight">
            AI Powered URL Scanner
          </p>
        </header>
        
        <div className="mt-8">
          <Scanner />
        </div>

        <Footer />
      </MainWrapper>
    </>
  );
};

export default ScanPage;
