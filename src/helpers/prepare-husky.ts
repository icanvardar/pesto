import { mkdirSync, writeFileSync } from "fs";
import path from "path";

/**
 * Prepares Husky configuration for pre-commit hooks in the project directory.
 * @param {string} projectPath - The path to the project directory.
 */
export function prepareHusky(projectPath: string): void {
    const huskyFolder = path.resolve(projectPath, ".husky");
    const preCommitFileFullPath = path.resolve(huskyFolder, "pre-commit");

    try {
        mkdirSync(huskyFolder);
        writeFileSync(preCommitFileFullPath, "npx lint-staged");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
