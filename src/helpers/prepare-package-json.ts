import { writeFileSync } from "fs";
import path from "path";
import { PackageJson } from "type-fest";
import { dependencies } from "../constants";

export function preparePackageJson(projectName: string, projectPath: string, isTs: string) {
  const packageJson: PackageJson = {
    name: projectName,
    description: "My node package!",
    version: "0.1.0",
    main: "dist/index.js",
    files: ["dist/*"],
    license: "MIT",
    devDependencies: {...dependencies.basicDevDependencies},
  };

  if (isTs) {
    packageJson.devDependencies = {...dependencies.tsDevDependencies};
    packageJson.types = "dist/index.d.ts";
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
