import { writeFileSync } from "fs";
import path from "path";
import { PackageJson } from "type-fest";
import { dependencies } from "../constants";

export function preparePackageJson(projectName: string, projectPath: string, isTs: boolean) {
  const packageJson: PackageJson = {
    name: projectName,
    description: "My node package!",
    version: "0.1.0",
    main: "dist/index.js",
    files: ["dist/*"],
    license: "MIT",
    devDependencies: {...dependencies.basicDevDependencies},
    scripts: {
      "start": "node src/index.js",
      "dev": "nodemon src/index.js"
    }
  };

  if (isTs) {
    packageJson.devDependencies = {...dependencies.tsDevDependencies};
    packageJson.types = "dist/index.d.ts";
    packageJson.scripts = {
      "copy:definitions": "copyfiles -u 1 \"src/**/*.d.ts\" dist",
      "dev": "ts-node src/index.ts",
      "start": "node ./dist/index.js",
      "clean": "rm -rf ./dist",
      "build": "npm run clean && tsc --declaration && npm run copy:definitions"
    }
  }

  try {
    writeFileSync(
      path.resolve(projectPath, "package.json"),
      JSON.stringify(packageJson, null, 2)
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
