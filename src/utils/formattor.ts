export function formatSecDuration(seconds: number): string {
  const months = Math.floor(seconds / (30 * 24 * 3600));
  seconds -= months * (30 * 24 * 3600);

  const days = Math.floor(seconds / (24 * 3600));
  seconds -= days * (24 * 3600);

  const hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;

  const minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;

  const result: string[] = [];

  if (months > 0) {
    result.push(`${months} month${months > 1 ? "s" : ""}`);
  }

  if (days > 0) {
    result.push(`${days} day${days > 1 ? "s" : ""}`);
  }

  if (hours > 0) {
    result.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  }

  if (minutes > 0) {
    result.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  }

  if (seconds > 0) {
    result.push(`${seconds} second${seconds > 1 ? "s" : ""}`);
  }

  return result.join(", ");
}

export function formatDayDuration(days: number): string {
  const years = Math.floor(days / 365);
  days -= years * 365;

  const months = Math.floor(days / 30);
  days -= months * 30;

  const result: string[] = [];

  if (years > 0) {
    result.push(`${years} year${years > 1 ? "s" : ""}`);
  }

  if (months > 0) {
    result.push(`${months} month${months > 1 ? "s" : ""}`);
  }

  if (days > 0) {
    result.push(`${days} day${days > 1 ? "s" : ""}`);
  }

  return result.join(", ");
}

export function divideArrayToString(arr: string[], delimiter: string): string {
  return arr.join(delimiter);
}

export function capitalizeFirstChar(str: string): string {
  return str[0].toUpperCase() + str.substring(1);
}

export function camelCaseToNormalCase(str: string): string {
  // Split the camelCaseString into words
  const words = str.replace(/([a-z])([A-Z])/g, "$1 $2").split(/(?:_| )+/);

  // Capitalize the first letter of each word and join them
  const normalCaseString = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return normalCaseString;
}

export function calculateVerdict(phishProbMod: number): string {
  const baseValue = phishProbMod;
  if (baseValue < 0.3) {
    return "VERY_LOW";
  } else if (baseValue < 0.45) {
    return "LOW";
  } else if (baseValue < 0.7) {
    return "MEDIUM";
  } else if (baseValue < 0.85) {
    return "HIGH";
  } else {
    return "VERY_HIGH";
  }
}

export function calculateTrustScore(phishProbMod: number): number {
  const score = Math.round((1 - phishProbMod) * 5);
  return score;
}
