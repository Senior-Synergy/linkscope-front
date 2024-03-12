import { featureInformation } from "@/constants/feature";

function FeatureTable() {
  return (
    <div className="overflow-x-auto rounded-lg border">
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
  );
}

export default FeatureTable;
