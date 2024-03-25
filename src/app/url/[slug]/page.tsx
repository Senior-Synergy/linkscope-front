const UrlPage = ({ params }: { params: { slug: string } }) => {
  const scanId = params.slug;

  return (
    <div
      className="flex flex-col flex-auto self-center
                gap-8 p-4
                w-full max-w-6xl"
    >
      <header>
        <h1 className="text-3xl font-bold mb-4">URL</h1>
        <p className="text-gray-600">Description to be added.</p>
        <p className="text-gray-600">Test Scan ID: {scanId}</p>
      </header>
    </div>
  );
};

export default UrlPage;
