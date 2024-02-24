import { featureInformation } from "@/constants/feature";

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

      {/* Section: Extracted Features */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Extracted Features</h2>
          <p>
            Extracted features provide valuable insights into the
            characteristics and behavior of URLs, allowing machine learning
            models to distinguish between legitimate and phishing URLs with
            greater accuracy. By analyzing these features, ML algorithms can
            identify patterns and anomalies associated with phishing activities.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border">
          <table>
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Explanation</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {/* Feature rows */}
              {Object.values(featureInformation).map((feature, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 font-medium bg-gray-100">
                    {feature.featureName}
                  </td>
                  <td className="px-4 py-2 font-medium bg-gray-white text-center">
                    {feature.dataType}
                  </td>
                  <td className="px-4 py-2 font-medium bg-gray-50 text-center">
                    {feature.sampleValue}
                  </td>
                  <td className="px-4 py-2 bg-white">{feature.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

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
