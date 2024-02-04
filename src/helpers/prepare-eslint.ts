import { writeFileSync } from "fs";
import path from "path";
import { eslintOptions } from "../constants";

export function prepareEslint(projectPath: string) {
  const eslintrcFullPath = path.resolve(projectPath, ".eslintrc");
  const eslintIgnoreFullPath = path.resolve(projectPath, ".eslintignore");
  const eslintIgnore = `
    node_modules
    public
    build
    out
  `;

  try {
    writeFileSync(eslintrcFullPath, JSON.stringify(eslintOptions));
    writeFileSync(eslintIgnoreFullPath, eslintIgnore, { encoding: "utf-8" });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
