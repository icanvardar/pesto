import path from "path";

// generate path from positionals
export function generatePath(pathToCheck: string): string {
  try {
    return path.resolve(pathToCheck);
  } catch (error) {
    console.error("Error occured while generating path:", error);
    process.exit(1);
  }
}
