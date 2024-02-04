import { runScript } from "./run-script";
import chalk from "chalk";

/**
 * Install Node.js dependencies for a project.
 *
 * @param {string} projectPath - The path to the project where dependencies should be installed.
 * @throws {Error} If an error occurs during the installation process.
 */
export async function installDependencies(projectPath: string) {
    try {
        console.log(chalk.blueBright(`👨‍🍳 Installing dependencies!`));
        await runScript(`cd ${projectPath} && npm install`);
    } catch (err: unknown) {
        throw new Error(err as string);
    }
}
