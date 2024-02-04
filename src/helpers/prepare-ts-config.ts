import { writeFileSync } from "fs";
import path from "path";
import { TsConfigJsonExtended } from "../shared/types";

// prepare tsconfig,json file
export function prepareTsConfig(projectPath: string) {
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
      JSON.stringify(tsConfigJson, null, 2)
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
