import { existsSync, mkdirSync } from "fs";
import { runScript } from "./run-script";

// prepare path
export async function preparePath(projectPath: string): Promise<void> {
    const folderExist = existsSync(projectPath);

    if (!folderExist) {
        mkdirSync(projectPath);
    } else {
        await runScript(`rm -rf ${projectPath}/*`);
    }
}
