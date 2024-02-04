import { writeFileSync } from "fs";
import path from "path";
import { eslintOptions } from "../constants";

/**
 * Prepares ESLint configuration files in the project directory.
 * @param {string} projectPath - The path to the project directory.
 * @throws {Error} Throws an error if any preparation step fails.
 */
export function prepareEslint(projectPath: string): void {
    const eslintrcFullPath = path.resolve(projectPath, ".eslintrc");
    const eslintIgnoreFullPath = path.resolve(projectPath, ".eslintignore");
    const eslintIgnore = `
    node_modules
    public
    build
    out
  `;

    try {
        writeFileSync(eslintrcFullPath, JSON.stringify(eslintOptions));
        writeFileSync(eslintIgnoreFullPath, eslintIgnore, { encoding: "utf-8" });
    } catch (err: unknown) {
        throw new Error(err as string);
    }
}
