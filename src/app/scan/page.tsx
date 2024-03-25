import Footer from "@/components/common/Footer";
import Scanner from "@/components/scanner/Scanner";

const ScanPage = () => {
  return (
    <main className="flex flex-col p-4 md:p-8 gap-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Scan</h1>
        <p>{`Utlize machine learning to analyze and identify safe URLs.`}</p>
      </header>

      <Scanner />

      <Footer />
    </main>
  );
};

export default ScanPage;
