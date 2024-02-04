import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { pseudoCodes } from "../constants";

/**
 * Prepares the source directory and files in the project.
 * @param {string} projectPath - The path to the project directory.
 * @param {boolean} isTs - A flag indicating whether the project is TypeScript-based.
 * @returns {string} The path of index file.
 * @throws {Error} Throws an error if any preparation step fails.
 */
export function prepareSrc(projectPath: string, isTs: boolean): string {
    const indexFileExtension = isTs ? ".ts" : ".js";
    const pseudoCode = isTs ? pseudoCodes.pseudoCodeForTypescript : pseudoCodes.pseudoCodeForBasic;
    const srcFolderPath = path.resolve(projectPath, "src");
    const indexFileFullPath = path.resolve(srcFolderPath, `index${indexFileExtension}`);

    try {
        mkdirSync(srcFolderPath);
        writeFileSync(indexFileFullPath, pseudoCode);

        return indexFileFullPath;
    } catch (err: unknown) {
        throw new Error(err as string);
    }
}
