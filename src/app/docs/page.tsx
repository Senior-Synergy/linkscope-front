import FeatureTable from "@/components/docs/FeatureTable";

const DocumentationPage = () => {
  const docsItems = [
    {
      title: "Model Information",
      descriptions:
        "Explanation about the model used, its accuracy, and other relevant metrics.",
      content: null,
    },
    {
      title: "Phish URL Metrics",
      descriptions: "Explanation about the metrics related to phishing URLs.",
      content: null,
    },
    {
      title: "Safe URL Metrics",
      descriptions: "Explanation about the metrics related to safe URLs.",
      content: null,
    },
    {
      title: "Feature Importance",
      descriptions:
        "Explanation about the importance of features in the model.",
      content: null,
    },
    {
      title: "Extracted Features",
      descriptions:
        "Extracted features provide valuable insights into the characteristics and behavior of URLs, allowing machine learning models to distinguish between legitimate and phishing URLs with greater accuracy. By analyzing these features, ML algorithms can identify patterns and anomalies associated with phishing activities.",
      content: <FeatureTable />,
    },
    {
      title: "Performance Metrics",
      descriptions:
        "Explanation about the performance metrics such as fitting time and scoring time.",
      content: null,
    },
  ];

  return (
    <main className="flex flex-col p-8 gap-4">
      <div className="">
        <h1 className="text-3xl font-bold mb-4">Documentation</h1>
        <p>To be updated</p>
      </div>

      {/* {docsItems.map((item, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold mb-2">{item.title}</h2>

          <div>
            <p>{item.descriptions}</p>
            {item.content && <div className="mt-4">{item.content}</div>}
          </div>
        </div>
      ))} */}
    </main>
  );
};

export default DocumentationPage;
