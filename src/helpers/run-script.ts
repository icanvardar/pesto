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
        const { stdout, stderr } = await exec(command);

        if (stderr) {
            throw new Error(stderr);
        }

        return stdout;
    } catch (err: unknown) {
        throw new Error(err as string);
    }
}
