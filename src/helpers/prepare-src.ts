import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { pseudoCodes } from "../constants";

/**
 * Prepares the source directory and files in the project.
 * @param {string} projectPath - The path to the project directory.
 * @param {boolean} isTs - A flag indicating whether the project is TypeScript-based.
 */
export function prepareSrc(projectPath: string, isTs: boolean): void {
    const indexFilePath = isTs ? ".ts" : ".js";
    const pseudoCode = isTs ? pseudoCodes.pseudoCodeForTypescript : pseudoCodes.pseudoCodeForBasic;
    const srcFolderPath = path.resolve(projectPath, "src");
    const indexFileFullPath = path.resolve(srcFolderPath, `index${indexFilePath}`);

    try {
        mkdirSync(srcFolderPath);
        writeFileSync(indexFileFullPath, pseudoCode);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
