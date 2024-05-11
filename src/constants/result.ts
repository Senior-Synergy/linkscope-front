export const verdictMappings: Record<string, { label: string; color: string }> =
  {
    UNKNOWN: { label: "Unknown", color: "bg-gray-500" },
    VERY_LOW: { label: "Safe", color: "bg-lime-500" },
    LOW: { label: "Safe", color: "bg-lime-500" },
    MEDIUM: { label: "Moderate", color: "bg-amber-500" },
    HIGH: { label: "Suspicious", color: "bg-orange-500" },
    VERY_HIGH: { label: "Malicious", color: "bg-red-500" },
  };

const verdictMapping = {
  UNKNOWN: { label: "Unknown", color: "bg-gray-500" },
  VERY_LOW: { label: "Safe", color: "bg-lime-500" },
  LOW: { label: "Safe", color: "bg-lime-500" },
  MEDIUM: { label: "Moderate", color: "bg-amber-500" },
  HIGH: { label: "Suspicious", color: "bg-orange-500" },
  VERY_HIGH: { label: "Malicious", color: "bg-red-500" },
};
