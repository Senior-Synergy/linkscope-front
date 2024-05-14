import { FaCircleQuestion } from "react-icons/fa6";
import { useTranslations } from "next-intl";

interface VerdictDisplayProps {
  phishProb: number;
  hasSoup: boolean;
  hideHint?: boolean;
}

function VerdictDisplay({
  hideHint,
  phishProb: phishProbMod,
  hasSoup,
}: VerdictDisplayProps) {
  const t = useTranslations("Verdict");
  // fallback color for "bg-color" so that a tailwind class is generated
  // const colorClass = color || "bg-gray-500";
  let verdict;

  if (!hasSoup)
    verdict = {
      value: "UNKNOWN",
      label: t("inconclusive"),
    };

  const baseValue = phishProbMod;

  if (baseValue < 0.3) {
    verdict = {
      value: "VERY_LOW",
      label: t("safe"),
    };
  } else if (baseValue < 0.45) {
    verdict = {
      value: "LOW",
      label: t("safe"),
    };
  } else if (baseValue < 0.7) {
    verdict = {
      value: "MEDIUM",
      label: t("moderate"),
    };
  } else if (baseValue < 0.85) {
    verdict = {
      value: "HIGH",
      label: t("suspecious"),
    };
  } else {
    verdict = {
      value: "VERY_HIGH",
      label: t("malicious"),
    };
  }

  const value = verdict.value;
  const label = verdict.label;

  return (
    <div
      className={`flex items-center justify-center py-2 text-center p-1 rounded-full
                ${hideHint ? "w-24" : "w-28"}
                ${(value == "LOW" || value == "VERY_LOW") && "bg-lime-500"}
                ${value == "MEDIUM" && "bg-yellow-500"}
                ${value == "HIGH" && "bg-orange-500"}
                ${value == "VERY_HIGH" && "bg-red-500"}
                ${value == "UNKNOWN" && "bg-gray-500"}`}
    >
      <p className="text-white text-sm font-normal">{label}</p>
      {value == "UNKNOWN" && !hideHint && (
        <div className="group/item relative">
          <FaCircleQuestion className="cursor-pointer ml-1" />
          <div className="absolute left-0 top-6 p-4 w-52 md:w-80 rounded-lg shadow-lg opacity-0 group-hover/item:opacity-100 pointer-events-none transition-opacity bg-white dark:bg-black border">
            Unknown due to not being able to extract crucial information from
            the provided URL.
          </div>
        </div>
      )}
    </div>
  );
}

export default VerdictDisplay;
