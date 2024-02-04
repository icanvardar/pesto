import util from "util";
import cp from "child_process";

const exec = util.promisify(cp.exec);

/**
 * Executes a shell command asynchronously.
 * @param {string} command - The shell command to execute.
 * @returns {Promise<string>} A Promise that resolves with the stdout of the command.
 * @throws {Error} Throws an error if the command execution fails.
 */
export async function runScript(command: string): Promise<string> {
    try {
        process.stdout.write(`Executing command: ${command}`);
        const loadingIndicator = setInterval(() => process.stdout.write("."), 500); // Display loading indicator every 0.5 seconds
        const { stdout, stderr } = await exec(command);
        clearInterval(loadingIndicator); // Remove loading indicator

        if (stderr) {
            process.stdout.write(`\nError: ${stderr}`);
            throw new Error(stderr);
        }

        process.stdout.write(`\nResult: ${stdout}`);
        return stdout;
    } catch (err: unknown) {
        process.stdout.write(`\nError: ${err}`);
        throw new Error(err as string);
    }
}
