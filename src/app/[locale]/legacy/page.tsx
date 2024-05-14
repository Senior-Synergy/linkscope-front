import { FaChevronRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");

  return (
    <main className="flex flex-col p-4 lg:p-8 gap-6">
      {t("title")}
      {/* <div className="fixed -z-10 inset-0">
        <Image
          alt="patterns"
          src={backgroundImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div> */}
      {/* <div>
        <header>
          <h2 className="text-2xl text-gray-600 font-normal h-8">Welcome to</h2>
          <h1 className="text-4xl text-primary font-bold">SENIOR SYNERGY</h1>
        </header>
      </div> */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Our Project</h2>

        <div className="border rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between w-full gap-2 mb-4 transition-colors rounded-md">
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-bold text-primary">LINKSCOPE</h1>
              <p className="text-gray-500">ML Powered URL Scanner</p>
            </div>
          </div>

          <p className="mb-4">
            LinkScope is a cutting-edge URL Scanner to identify phishing links.
            Our tool utilize machine learning to analyze URLs, providing you
            with instant insights into potential risks. Simply input text and it
            will automatically identify URLs within it.
          </p>

          {/* <Link href="/linkscope">
            <Button className="h-12 w-full" primary sizeOverride>
              Start now
            </Button>
          </Link> */}
          <div className="flex justify-between items-center gap-4 bg-primary text-white border rounded-lg p-4">
            <div>
              <h2 className="text-2xl font-bold">Scan Now</h2>

              <p>Sed ut perspiciatis unde omnis iste.</p>
            </div>

            <FaChevronRight className="w-6 h-6 mx-4" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex justify-between items-center gap-4 border rounded-lg p-4 lg:w-1/2">
            <div>
              <h2 className="text-2xl font-bold">Search</h2>

              <p>Sed ut perspiciatis unde omnis iste.</p>
            </div>

            <FaChevronRight className="w-6 h-6 mx-4" />
          </div>
          <div className="flex justify-between items-center gap-4 border rounded-lg p-4 lg:w-1/2">
            <div>
              <h2 className="text-2xl font-bold">Documentation</h2>

              <p>Sed ut perspiciatis unde omnis iste.</p>
            </div>

            <FaChevronRight className="w-6 h-6 mx-4" />
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>

        <p className="border rounded-lg p-4">
          Senior Synergy is a group of dedicated individuals working together to
          create innovative projects that make a difference. We are passionate
          about technology and its potential to solve real-world problems.
        </p>
      </section>
    </main>
  );
}

export default HomePage;
