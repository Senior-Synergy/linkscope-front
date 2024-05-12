interface ResultListFallbackProps {
  pageSize: number;
}

function ResultListFallback({ pageSize }: ResultListFallbackProps) {
  return (
    <div>
      <div>
        <div className="flex justify-between border border-b-0 rounded-t-lg px-4 py-2 bg-gray-100 dark:bg-gray-900 font-semibold">
          <p>Result</p>

          <div className="flex gap-4 text-center">
            <p className="hidden sm:block w-20">Date</p>
            <p className="w-24">Status</p>
          </div>
        </div>

        <div className="border rounded-b-lg">
          <div
            className="flex flex-col
                  w-full divide-y divide"
          >
            {Array(pageSize)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 p-4 h-20"
                >
                  <div className="flex flex-col">
                    <div className="h-4 w-56 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse" />
                    <div className="h-4 w-32 mt-2 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultListFallback;
