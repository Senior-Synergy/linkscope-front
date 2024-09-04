import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { FaChevronRight } from "react-icons/fa6";

import Footer from "@/components/common/Footer";
import FeatureTable from "@/components/docs/FeatureTable";

const docsContent = {
  "en-US": {
    title: "Your News",
    content: [
      {
        title:
          "Otter.ai’s new assistant can automatically transcribe your Zoom meetings",
        synopsis:
          "A.I.-powered voice transcription service Otter.ai wants to make it even easier for its business users to record their meetings. The company is today introducing a new feature, Otter Assistant, whic...",
        imageUrl: "",
      },
      // ...
    ],
  },
  "th-TH": {
    title: "Your News",
    content: [
      {
        title:
          "Otter.ai’s new assistant can automatically transcribe your Zoom meetings",
        synopsis:
          "A.I.-powered voice transcription service Otter.ai wants to make it even easier for its business users to record their meetings. The company is today introducing a new feature, Otter Assistant, whic...",
        imageUrl: "",
      },
      // ...
    ],
  },
};

function DocumentationPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");

  const accuracy = 96.13;
  const precision = 96.28;
  const recall = 95.97;
  const f1Score = 96.13;

  const contentItems = [
    {
      title: "Introduction",
      id: "introduction",
    },
    {
      title: "URL components",
      id: "url-components",
    },
    {
      title: "Machine Learning Techniques",
      id: "ml-techniques",
    },
    {
      title: "Model Results",
      id: "model-result",
    },
    {
      title: "Feature Information",
      id: "feature-table",
    },
  ];

  return (
    <main className="relative px-4 py-6 md:p-8 w-full">
      <section id="tb-content" className="hidden md:block md:fixed w-64">
        <div>
          <div className="flex justify-between border-t border rounded-t-lg px-4 py-2 bg-gray-50 dark:bg-gray-950 text-gray-700  dark:text-gray-200 font-semibold">
            <p className="font-semibold">On this page</p>
          </div>
          <div className="border border-t-0 rounded-b-lg bg-white dark:bg-black">
            <ul className="flex flex-col divide-y">
              {contentItems.map((content, index) => (
                <Link key={index} href={`#${content.id}`}>
                  <li className="flex justify-between items-center hover:bg-gray-200 hover:dark:bg-gray-800 transition-colors px-4 py-2">
                    <p className="mr-8">{content.title}</p>
                    <FaChevronRight />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="md:ml-72">
        <header>
          <h1 className="text-4xl font-bold">Documentation</h1>
          <p className="text-gray-800 dark:text-gray-200 font-extralight truncate">
            The development of LINKSCOPE
          </p>
        </header>

        <article className="mt-8">
          <section id="introduction">
            <h2 className="text-xl font-semibold">Introduction</h2>
            <p className="mt-4">
              Phishing URLs pose a grave threat to individuals in Thailand, and
              the risk is expected to escalate considerably in the future. While
              existing phishing link detection tools primarily focus on
              technical aspects, there remains a significant gap in addressing
              the informational needs of users beyond just numbers and data.
            </p>
            <p className="mt-4">
              In response to the increasing threat of phishing attacks and the
              need for user-centric cybersecurity solutions, this project aims
              to develop a phishing detection tool powered by interpretable
              machine learning models.
            </p>
          </section>

          <hr className="m-8" />

          <section id="url-components" className="mt-8">
            <h2 className="text-xl font-semibold">URL components</h2>
            <p className="mt-4">
              A Uniform Resource Locator (URL) is designed to locate web pages.
              The diagram below outlines the structure of a common URL and its
              key components.
            </p>
            <Image
              src="/images/url-structure.png"
              alt="url-structure"
              width={500}
              height={100}
              className="border rounded-xl mx-auto my-4 bg-white"
            />
            <p className="mt-4">
              A phisher has complete control over the subdomain sections and can
              assign any value to them. The URL might also include a path and
              file elements that can be manipulated by the phisher as desired.
              The path is entirely under the phisher&apos;s control. In the rest
              of this article, we refer to these portions of the URL as FreeURL.
            </p>
          </section>

          <hr className="m-8" />

          <section id="ml-techniques" className="mt-8">
            <h2 className="text-xl font-semibold">
              Machine Learning Techniques
            </h2>
            <h3 className="mt-8 text-lg font-medium">
              Algorithm : Random Forest
            </h3>
            <p className="mt-4">
              The Random Forest algorithm can be utilized to enhance accuracy
              and mitigate overfitting in URL classification. The algorithm
              combines the outputs of multiple decision trees to categorize
              URLs. By using random subsets of features, each decision tree
              focuses on different combinations of URL features. The diverse set
              of decision trees creates a robust ensemble model that effectively
              analyzes and classifies URLs. A final decision is made through
              majority voting based on the predictions from each tree, resulting
              in more reliable and precise classifications compared to a single
              decision tree model.
            </p>
            <h3 className="mt-4 text-lg font-medium">
              Features selection method : Particle Swarm Optimization
            </h3>
            <p className="mt-4">
              The purpose of feature selection is to select a subset of relevant
              features from a large number of available features to achieve
              similar or even better classification performance than using all
              features. By eliminating/reducing irrelevant and redundant
              features, feature selection could reduce the number of features,
              shorten the training time, simplify the learned classifiers,
              and/or improve the classification performance.
            </p>
            <Image
              src="/images/feature-importance.png"
              alt="feature-importance-chart"
              width={500}
              height={100}
              className="border rounded-xl mx-auto my-8 p-4 bg-white"
            />
            <p className="mt-8">
              Particle Swarm Optimization is a population based technique to
              address feature selection problems in this project due to better
              representation, capability of searching large spaces, being less
              expensive computationally, being easier to implement, and fewer
              parameters being required. PSO simulates social behavior such as
              birds flocking and fish schooling. In PSO, a population, also
              called a swarm, of candidate solutions are encoded as particles in
              the search space. PSO starts with the random initialisation of a
              population of particles. Particles move in the search space to
              search for the optimal solution by updating the position of each
              particle based on the experience of its own.
            </p>
            <p className="mt-4">
              After performing feature selection using PSO, 19 features were
              selected, resulting in the highest accuracy of{" "}
              <strong>96.12 </strong>
              percent. The following are the features used for the model.
            </p>
          </section>

          <hr className="m-8" />

          <section id="model-result" className="mt-8">
            <h2 className="text-xl font-semibold">Model Results</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <li className="flex-auto">
                <div className="font-bold flex items-center justify-center p-2 rounded-t-lg bg-gray-50 dark:bg-gray-950 text-gray-700  dark:text-gray-200 border">
                  Accuracy
                </div>
                <div className="text-4xl text-center p-8 border border-t-0 rounded-b-lg bg-white dark:bg-black">
                  {accuracy}%
                </div>
              </li>
              <li className="flex-auto">
                <div className="font-bold flex items-center justify-center p-2 rounded-t-lg bg-gray-50 dark:bg-gray-950 text-gray-700  dark:text-gray-200 border">
                  Precision
                </div>
                <div className="text-4xl text-center p-8 border border-t-0 rounded-b-lg bg-white dark:bg-black">
                  {precision}%
                </div>
              </li>
              <li className="flex-auto">
                <div className="font-bold flex items-center justify-center p-2 rounded-t-lg bg-gray-50 dark:bg-gray-950 text-gray-700  dark:text-gray-200 border">
                  Recall
                </div>
                <div className="text-4xl text-center p-8 border border-t-0 rounded-b-lg bg-white dark:bg-black">
                  {recall}%
                </div>
              </li>
              <li className="flex-auto">
                <div className="font-bold flex items-center justify-center p-2 rounded-t-lg bg-gray-100 dark:bg-gray-800 text-gray-700  dark:text-gray-200 border">
                  F1-Score
                </div>
                <div className="text-4xl text-center p-8 border border-t-0 rounded-b-lg">
                  {f1Score}%
                </div>
              </li>
            </ul>
          </section>

          <hr className="m-8" />

          <section id="feature-table" className="mt-8">
            <h2 className="text-xl font-semibold">
              Information About Each Features
            </h2>
            <div className="mt-4">
              <FeatureTable />
            </div>
          </section>
        </article>

        <Footer />
      </div>
    </main>
  );
}

export default DocumentationPage;
