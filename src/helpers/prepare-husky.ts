import { mkdirSync, writeFileSync } from "fs";
import path from "path";

export function prepareHusky(projectPath: string) {
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
