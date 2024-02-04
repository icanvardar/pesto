"use strict";
import { prepareEslint } from "./prepare-eslint";
import { prepareHusky } from "./prepare-husky";
import { preparePackageJson } from "./prepare-package-json";
import { preparePath } from "./prepare-path";
import { preparePrettier } from "./prepare-prettier";
import { prepareSrc } from "./prepare-src";
import { prepareTsConfig } from "./prepare-ts-config";
import chalk from "chalk";

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

    try {
        const packageJsonPath = preparePackageJson(projectName, projectPath, isTs);
        console.log(chalk.blueBright(`⭐ package.json created at ${packageJsonPath}!`));

        const indexFilePath = prepareSrc(projectPath, isTs);
        console.log(chalk.blueBright(`⭐ index file created at ${indexFilePath}!`));

        const [eslintrcPath, eslintIgnorePath] = prepareEslint(projectPath);
        console.log(chalk.blueBright(`⭐ .eslintrc created at ${eslintrcPath}!`));
        console.log(chalk.blueBright(`⭐ .eslingingore created at ${eslintIgnorePath}!`));

        const [prettierrcPath, prettierIgnorePath] = preparePrettier(projectPath);
        console.log(chalk.blueBright(`⭐ .prettierrc created at ${prettierrcPath}!`));
        console.log(chalk.blueBright(`⭐ .prettierignore created at ${prettierIgnorePath}!`));

        const huskyFolder = await prepareHusky(projectPath);
        console.log(chalk.blueBright(`⭐ .husky initialized at ${huskyFolder}!`));
    } catch (err: unknown) {
        throw new Error(err as string);
    }
}
