import path from "path";
import { getArgs, prepareTemplate } from "./helpers";

/**
 * Initializes a new project based on the provided arguments.
 */
async function init() {
    try {
        // Get command line arguments
        const { projectPath, template /*verbose8*/ } = await getArgs();

        // Extract project name from project path
        const projectName: string = path.basename(projectPath);

        // Determine if the project is TypeScript-based
        const isTs: boolean = template === "typescript" ? true : false;

        // Prepare the project template
        await prepareTemplate(projectName, projectPath, isTs);
    } catch (err: unknown) {
        // Handle any errors
        throw new Error(err as unknown as string);
    }
}

// Immediately invoke the init function
(async () => {
    await init();
})();
