import { prepareEslint } from "./prepare-eslint";
import { prepareHusky } from "./prepare-husky";
import { preparePackageJson } from "./prepare-package-json";
import { preparePath } from "./prepare-path";
import { preparePrettier } from "./prepare-prettier";
import { prepareSrc } from "./prepare-src";
import { prepareTsConfig } from "./prepare-ts-config";

/**
 * Prepares a project template by setting up necessary configurations and files.
 * @param {string} projectName - The name of the project.
 * @param {string} projectPath - The path to the project directory.
 * @param {boolean} isTs - A flag indicating whether the project is TypeScript-based.
 * @throws {Error} Throws an error if any preparation step fails.
 */
export async function prepareTemplate(projectName: string, projectPath: string, isTs: boolean) {
    try {
        await preparePath(projectPath);
    } catch (err: unknown) {
        throw new Error(err as unknown as string);
    }

    if (isTs) {
        prepareTsConfig(projectPath);
    }

    preparePackageJson(projectName, projectPath, isTs);
    prepareSrc(projectPath, isTs);
    prepareEslint(projectPath);
    preparePrettier(projectPath);
    prepareHusky(projectPath);
}
