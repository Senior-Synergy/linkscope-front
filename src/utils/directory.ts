export function extractDirectory(route: string, index: number): string {
  const parts = route.replace(/^\/|\/$/g, "").split("/");
  return "/" + parts[index];
}
