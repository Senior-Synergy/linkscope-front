import MainWrapper from "@/components/common/wrapper/MainWrapper";
import FeatureTable from "@/components/docs/FeatureTable";

const DocumentationPage = () => {
  return (
    <MainWrapper>
      <header>
        <h1 className="text-4xl font-bold">Documentation</h1>
        <p className="text-gray-500">To be updated...</p>
      </header>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Introduction</h2>
        <p className="mt-2">
          Phishing URLs pose a grave threat to individuals in Thailand, and the
          risk is expected to escalate considerably in the future. While
          existing phishing link detection tools primarily focus on technical
          aspects, there remains a significant gap in addressing the
          informational needs of users beyond just numbers and data.
        </p>
        <p className="mt-2">
          In response to the increasing threat of phishing attacks and the need
          for user-centric cybersecurity solutions, this project aims to develop
          a phishing detection tool powered by interpretable machine learning
          models.
        </p>
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
    </MainWrapper>
  );
};

export default DocumentationPage;
