const DocumentationPage = () => {
  return (
    <div className="flex flex-col flex-auto gap-8 p-8 self-center w-full max-w-6xl bg-white">
      <div>
        <h1 className="text-3xl font-bold mb-4">Documentation</h1>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Model Information</h2>
        <p>
          Explanation about the model used, its accuracy, and other relevant
          metrics.
        </p>
        {/* Add more detailed explanation here if needed */}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Phish URL Metrics</h2>
        <p>Explanation about the metrics related to phishing URLs.</p>
        {/* Add more detailed explanation here if needed */}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Safe URL Metrics</h2>
        <p>Explanation about the metrics related to safe URLs.</p>
        {/* Add more detailed explanation here if needed */}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Feature Importance</h2>
        <p>Explanation about the importance of features in the model.</p>
        {/* Add more detailed explanation here if needed */}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Performance Metrics</h2>
        <p>
          Explanation about the performance metrics such as fitting time and
          scoring time.
        </p>
        {/* Add more detailed explanation here if needed */}
      </div>
    </div>
  );
};

export default DocumentationPage;
