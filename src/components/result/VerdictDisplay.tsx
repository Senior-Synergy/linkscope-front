import { FaCircleQuestion } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { calculateVerdict } from "@/utils/formattor";

interface VerdictDisplayProps {
  phishProb: number;
  hasSoup: boolean;
  hideHint?: boolean;
}

function VerdictDisplay({ hideHint, phishProb, hasSoup }: VerdictDisplayProps) {
  const t_verdict = useTranslations("Verdict");
  // fallback color for "bg-color" so that a tailwind class is generated
  // const colorClass = color || "bg-gray-500";
  const verdictValue = calculateVerdict(phishProb, hasSoup ?? false);

  let verdict;

  switch (verdictValue) {
    case "UNKNOWN":
      verdict = t_verdict("inconclusive");
      break;
    case "VERY_LOW":
      verdict = t_verdict("safe");
      break;
    case "LOW":
      verdict = t_verdict("safe");
      break;
    case "MEDIUM":
      verdict = t_verdict("moderate");
      break;
    case "HIGH":
      verdict = t_verdict("suspicious");
      break;
    case "VERY_HIGH":
      verdict = t_verdict("malicious");
      break;
    default:
      verdict = t_verdict("inconclusive");
      break;
  }

  return (
    <div
      className={`flex items-center justify-center py-2 text-center p-1 rounded-full
                ${hideHint ? "w-24" : "w-28"}
                ${
                  (verdictValue == "LOW" || verdictValue == "VERY_LOW") &&
                  "bg-lime-500"
                }
                ${verdictValue == "MEDIUM" && "bg-yellow-500"}
                ${verdictValue == "HIGH" && "bg-orange-500"}
                ${verdictValue == "VERY_HIGH" && "bg-red-500"}
                ${verdictValue == "UNKNOWN" && "bg-gray-500"}`}
    >
      <p className="text-white text-sm font-normal">{verdict}</p>
      {/* {verdictValue == "UNKNOWN" && !hideHint && (
        <div className="group/item relative">
          <FaCircleQuestion className="cursor-pointer ml-1" />
          <div className="absolute left-0 top-6 p-4 w-52 md:w-80 rounded-lg shadow-lg opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity bg-white dark:bg-black border">
            Unknown due to not being able to extract crucial information from
            the provided URL.
          </div>
        </div>
      )} */}
    </div>
  );
}

export default VerdictDisplay;
