import { existsSync, mkdirSync } from "fs";
import { runScript } from "./run-script";

/**
 * Prepares the path for the project.
 * @param {string} projectPath - The path to the project directory.
 * @returns {Promise<void>} A Promise that resolves once the path is prepared.
 */
export async function preparePath(projectPath: string): Promise<void> {
    const folderExist = existsSync(projectPath);

    if (!folderExist) {
        mkdirSync(projectPath);
    } else {
        await runScript(`rm -rf ${projectPath}/*`);
    }
}
