import { Args, TemplateType } from "../shared/types";
import { parseArgs } from "util";
import { generatePath } from "./generate-path";

/**
 * Asynchronously retrieves command line arguments.
 * @returns {Promise<Args>} The parsed command line arguments.
 * @throws {Error} Throws an error if any preparation step fails.
 */
export async function getArgs(): Promise<Args> {
    const { values, positionals } = parseArgs({
        options: {
            template: {
                type: "string",
                short: "t",
                default: "basic",
            },
            verbose: {
                type: "boolean",
                short: "v",
                default: false,
            },
        },
        allowPositionals: true,
        strict: true,
    });

    const { template, verbose } = values;
    try {
        const projectPath = generatePath(positionals[0]);

        return {
            projectPath: projectPath!,
            template: template! as TemplateType,
            verbose: verbose!,
        };
    } catch (err: unknown) {
        throw new Error(err as string);
    }
}
