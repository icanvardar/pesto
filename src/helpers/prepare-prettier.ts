import { writeFileSync } from "fs";
import path from "path";
import { prettierOptions } from "../constants";

/**
 * Prepares Prettier configuration files in the project directory.
 * @param {string} projectPath - The path to the project directory.
 * @throws {Error} Throws an error if any preparation step fails.
 */
export function preparePrettier(projectPath: string) {
    const eslintrcFullPath = path.resolve(projectPath, ".prettierrc");
    const prettierIgnoreFullPath = path.resolve(projectPath, ".prettierignore");
    const prettierIgnore = `
    node_modules
    public
    build
    out
  `;

    try {
        writeFileSync(eslintrcFullPath, JSON.stringify(prettierOptions));
        writeFileSync(prettierIgnoreFullPath, prettierIgnore, { encoding: "utf-8" });
    } catch (err: unknown) {
        throw new Error(err as string);
    }
}
