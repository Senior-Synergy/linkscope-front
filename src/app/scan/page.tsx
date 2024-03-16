import Footer from "@/components/common/Footer";
import Scanner from "@/components/scanner/Scanner";

const ScanPage = () => {
  return (
    <main className="flex flex-col p-4 gap-4">
      <header>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">LinkScope URL Scanner</h1>
          <p>
            {`LinkScope is a cutting-edge URL Scanner to identify phishing links.
            Our tool utlize machine learning to analyze URLs, providing you with
            instant insights into potential risks. Simply input text and it will
            automatically identify URLs within it.`}
          </p>
        </div>
      </header>

      <Scanner />

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">How to Use:</h2>
        <ol className="list-decimal pl-6 font-light">
          <li>{`Enter your text in the input area.`}</li>
          <li>{`Confirm the selection of the URLs you want to process.`}</li>
          <li>{`Click the "Submit" button to initiate the scanning process.`}</li>
        </ol>
      </div>

      <Footer />
    </main>
  );
};

export default ScanPage;
