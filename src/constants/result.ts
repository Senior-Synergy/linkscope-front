export const verdictMappings: Record<string, { label: string; color: string }> =
  {
    UNKNOWN: { label: "Unknown", color: "GRAY" },
    VERY_LOW: { label: "Safe", color: "GREENLIGHT" },
    LOW: { label: "Safe", color: "GREENLIGHT" },
    MEDIUM: { label: "Moderate", color: "YELLOW" },
    HIGH: { label: "Suspicious", color: "ORANGE" },
    VERY_HIGH: { label: "Malicious", color: "RED" },
  };
