import { writeFileSync } from "fs";
import path from "path";
import { prettierOptions } from "../constants";

/**
 * Prepares Prettier configuration files in the project directory.
 * @param {string} projectPath - The path to the project directory.
 * @returns {string[]} Path of both .prettierrc and .prettierignore
 * @throws {Error} Throws an error if any preparation step fails.
 */
export function preparePrettier(projectPath: string): string[] {
    const prettierrcFullPath = path.resolve(projectPath, ".prettierrc");
    const prettierIgnoreFullPath = path.resolve(projectPath, ".prettierignore");
    const prettierIgnore = `
    node_modules
    public
    build
    out
  `;

    try {
        writeFileSync(prettierrcFullPath, JSON.stringify(prettierOptions));
        writeFileSync(prettierIgnoreFullPath, prettierIgnore, { encoding: "utf-8" });

        return [prettierrcFullPath, prettierIgnoreFullPath];
    } catch (err: unknown) {
        throw new Error(err as string);
    }
}
