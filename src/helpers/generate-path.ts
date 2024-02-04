import path from "path";

/**
 * Generates an absolute path from the given path.
 * @param {string} pathToCheck - The path to be resolved.
 * @returns {string} The resolved absolute path.
 */
export function generatePath(pathToCheck: string): string {
    try {
        return path.resolve(pathToCheck);
    } catch (error) {
        console.error("Error occurred while generating path:", error);
        process.exit(1);
    }
}
