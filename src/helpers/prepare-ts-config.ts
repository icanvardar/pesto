import { writeFileSync } from "fs";
import path from "path";
import { TsConfigJsonExtended } from "../shared/types";

/**
 * Prepares the tsconfig.json file for TypeScript configuration.
 * @param {string} projectPath - The path to the project directory.
 * @throws {Error} Throws an error if any preparation step fails.
 */
export function prepareTsConfig(projectPath: string): void {
    const tsConfigJson: TsConfigJsonExtended = {
        $schema: "https://json.schemastore.org/tsconfig",
        extends: "@tsconfig/recommended/tsconfig.json",
        "ts-node": {
            files: true,
        },
        compilerOptions: {
            outDir: "dist",
            allowJs: true,
            declaration: true,
        },
        include: ["src/**/*"],
        exclude: ["node_modules"],
    };

    try {
        writeFileSync(
            path.resolve(projectPath, "tsconfig.json"),
            JSON.stringify(tsConfigJson, null, 2),
        );
    } catch (err: unknown) {
        throw new Error(err as string);
    }
}
