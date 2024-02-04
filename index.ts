import { parseArgs } from "util";
import path from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { $ } from "execa";
import ts from "typescript";

const $$ = $({ stdio: "inherit" });

type TemplateType = "basic" | "typescript";

interface Args {
  projectPath: string;
  template: TemplateType;
  verbose: boolean;
}

type CompilerOptions = typeof ts.parseCommandLine extends (
  ...args: any[]
) => infer TResult
  ? TResult extends { options: infer TOptions }
    ? TOptions
    : never
  : never;
type TypeAcquisition = typeof ts.parseCommandLine extends (
  ...args: any[]
) => infer TResult
  ? TResult extends { typeAcquisition?: infer TTypeAcquisition }
    ? TTypeAcquisition
    : never
  : never;

interface TSConfig {
  $schema: string;
  compilerOptions: CompilerOptions;
  exclude: string[];
  compileOnSave?: boolean;
  extends: string;
  files?: string[];
  include: string[];
  typeAcquisition?: TypeAcquisition;
  "ts-node": {
    files: boolean;
  }
}

// generate path from positionals
function generatePath(pathToCheck: string): string {
  try {
    return path.resolve(pathToCheck);
  } catch (error) {
    console.error("Error occured while generating path:", error);
    process.exit(1);
  }
}

// get arguments
async function getArguments(): Promise<Args> {
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

  const projectPath = generatePath(positionals[0]);

  return {
    projectPath: projectPath!,
    template: template! as TemplateType,
    verbose: verbose!,
  };
}

// prepare path
async function prepareProjectPath(projectPath: string): Promise<void> {
  const folderExist = existsSync(projectPath);

  if (!folderExist) {
    mkdirSync(projectPath);
  } else {
    await $$`rm -rf ${projectPath}/*`;
  }
}

// validate template
function prepareTsConfig(projectPath: string) {
  const tsConfig: TSConfig = {
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
    exclude: ["node_modules"]
  }
  
  try {
    writeFileSync(path.resolve(projectPath, "tsconfig.json"), JSON.stringify(tsConfig, null, 2));
  } catch(err) {
    console.error(err);
    process.exit(1);
  }
}

// differentiate npm yarn pnpm

// prepare users path

// prepare template

// write to file

// prepare package.json

// prepare eslint

// prepare prettier

// prepare husky

// prepare chai files

// prepare github actions

// download dependencies

async function init() {
  const { projectPath, template, verbose } = await getArguments();

  console.log(projectPath);

  prepareProjectPath(projectPath);

  switch(template) {
    case "basic":
      console.log("basic template!");
    case "typescript":
      prepareTsConfig(projectPath);
    default:
      console.log("default");
  }
}

(async () => {
  init();
})();
