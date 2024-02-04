import { writeFileSync } from "fs";
import path from "path";
import { PackageJson } from "type-fest";
import { dependencies } from "../constants";

/**
 * Prepares the package.json file with necessary configurations.
 * @param {string} projectName - The name of the project.
 * @param {string} projectPath - The path to the project directory.
 * @param {boolean} isTs - A flag indicating whether the project is TypeScript-based.
 */
export function preparePackageJson(projectName: string, projectPath: string, isTs: boolean): void {
    const packageJson: PackageJson = {
        name: projectName,
        description: "My node package!",
        version: "0.1.0",
        main: "dist/index.js",
        files: ["dist/*"],
        license: "MIT",
        devDependencies: { ...dependencies.basicDevDependencies },
        scripts: {
            start: "node src/index.js",
            dev: "nodemon src/index.js",
            prepare: "husky",
            format: "prettier --config .prettierrc 'src/**/*.js' --write",
            lint: "eslint --quiet --fix",
        },
        "lint-staged": {
            "*.{js,jsx,ts,tsx}": ["eslint --quiet --fix"],
            "*.{json,js,ts,jsx,tsx,html}": ["prettier --config .prettierrc 'src/**/*.ts' --write"],
        },
    };

    if (isTs) {
        packageJson.devDependencies = { ...dependencies.tsDevDependencies };
        packageJson.types = "dist/index.d.ts";
        packageJson.scripts = {
            "copy:definitions": 'copyfiles -u 1 "src/**/*.d.ts" dist',
            dev: "ts-node src/index.ts",
            start: "node ./dist/index.js",
            clean: "rm -rf ./dist",
            build: "npm run clean && tsc --declaration && npm run copy:definitions",
            prepare: "husky",
            format: "prettier --config .prettierrc 'src/**/*.ts' --write",
            lint: "eslint --quiet --fix",
        };
    }

    try {
        writeFileSync(
            path.resolve(projectPath, "package.json"),
            JSON.stringify(packageJson, null, 2),
        );
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
