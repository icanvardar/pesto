import { execSync, spawn, spawnSync } from "child_process";
import { parseArgs } from "util";
import path from "path";
import { existsSync, mkdirSync } from "fs";

type TemplateType = "basic" | "typescript";

interface Args {
  projectPath: string;
  template: TemplateType;
  verbose: boolean;
}

// generate path from positionals
function generatePath(pathToCheck: string) {
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
function preparePath(projectPath: string) {
  const folderExist = existsSync(projectPath);

  if (!folderExist) {
    mkdirSync(projectPath);
  } else {
    execSync(`rm -rf ${projectPath}/*`);
  }
}

// validate template

// differentiate npm yarn pnpm

// prepare users path

// prepare template

// write to file

// prepare package.json

// prepare eslint

// prepare prettier

// prepare husky

// prepare github actions

// download dependencies

async function init() {
  const { projectPath, template, verbose } = await getArguments();

  console.log(projectPath);

  preparePath(projectPath);
}

(async () => {
  init();
})();
