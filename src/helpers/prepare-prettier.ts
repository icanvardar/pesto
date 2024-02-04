import { writeFileSync } from "fs";
import path from "path";
import { prettierOptions } from "../constants";

export function preparePrettier(projectPath: string) {
  const eslintrcFullPath = path.resolve(projectPath, ".prettierrc");
  const prettierIgnoreFullPath = path.resolve(projectPath, ".prettierignore");
  const prettierIgnore = `
    node_modules
    public
    build
    out
  `;

  try {
    writeFileSync(eslintrcFullPath, JSON.stringify(prettierOptions));
    writeFileSync(prettierIgnoreFullPath, prettierIgnore, { encoding: "utf-8" });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
