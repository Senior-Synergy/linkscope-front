import { FeatureCommon } from "@/types/urlTypes";

interface FeatureListProps {
  feature: FeatureCommon;
}

function FeatureList({ feature }: FeatureListProps) {
  const featureListItems = [
    {
      name: "",
      value: feature.www,
    },
  ];
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table>
        <thead>
          <tr className="bg-gray-100 text-white">
            <th className="px-4 py-2">Feature</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Value</th>
            <th className="px-4 py-2">Explanation</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {/* Feature rows */}
          {featureListItems.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 font-medium bg-gray-100">{item.name}</td>
              <td className="px-4 py-2 font-medium bg-gray-white text-center">
                {item.value}
              </td>
              {/* <td className="px-4 py-2 font-medium bg-gray-50 text-center">
                {feature.sampleValue}
              </td>
              <td className="px-4 py-2 bg-white">{feature.explanation}</td>*/}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeatureList;
