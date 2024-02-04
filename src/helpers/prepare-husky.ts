import { existsSync, mkdirSync, writeFileSync } from "fs";
import path from "path";
import { runScript } from "./run-script";

/**
 * Prepares Husky configuration for pre-commit hooks in the project directory.
 * @param {string} projectPath - The path to the project directory.
 * @returns {Promise<string>} A Promise that returns .husky folder's path.
 * @throws {Error} Throws an error if any preparation step fails.
 */
export async function prepareHusky(projectPath: string): Promise<string> {
    const huskyFolder = path.resolve(projectPath, ".husky");
    const preCommitFileFullPath = path.resolve(huskyFolder, "pre-commit");

    try {
        if (existsSync(huskyFolder)) {
            await runScript(`rm -rf ${huskyFolder}`);
        }

        mkdirSync(huskyFolder);
        writeFileSync(preCommitFileFullPath, "npx lint-staged");

        return huskyFolder;
    } catch (err: unknown) {
        throw new Error(err as string);
    }
}
