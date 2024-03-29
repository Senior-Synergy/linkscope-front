import Footer from "@/components/common/Footer";
import Scanner from "@/components/scanner/Scanner";

const ScanPage = () => {
  return (
    <main className="flex flex-col p-4 md:p-8 gap-6">
      <header>
        <h1 className="text-4xl font-bold">Scan</h1>
        <p className="text-gray-500">Analyze your URLs</p>
      </header>

      <Scanner />

      <div>
        <h2 className="font-bold text-2xl mb-4">How Does the Scanner Works?</h2>
        <p>
          Coming soon...
        </p>
      </div>

      <Footer />
    </main>
  );
};

export default ScanPage;
