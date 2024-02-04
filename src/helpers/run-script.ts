import util from "util";
import cp from "child_process";

const exec = util.promisify(cp.exec);

export async function runScript(command: string) {
    try {
        const { stdout, stderr } = await exec(command);

        if (stderr) {
            throw new Error(stderr);
        }

        return stdout;
    } catch (err: unknown) {
        throw new Error(err as unknown as string);
    }
}
