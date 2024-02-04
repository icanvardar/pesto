import path from "path";

/**
 * Generates an absolute path from the given path.
 * @param {string} pathToCheck - The path to be resolved.
 * @returns {string} The resolved absolute path.
 * @throws {Error} Throws an error if any preparation step fails.
 */
export function generatePath(pathToCheck: string): string {
    try {
        return path.resolve(pathToCheck);
    } catch (err) {
        throw new Error(err as string);
    }
}
