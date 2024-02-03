import { execSync, spawn, spawnSync } from "child_process";
import { parseArgs } from "util";
import path from "path";

type TemplateType = "basic" | "typescript";

interface Args {
  path: string;
  template: TemplateType;
  verbose: boolean;
}

// generate path from positionals
function generatePath(pathToCheck: string) {
  try {
    const result = execSync(`./src/tasks/is_path.sh "${pathToCheck}"`, {
      encoding: "utf-8",
    });
    return path.resolve(result.trim() === "false" ? pathToCheck : result);
  } catch (error) {
    console.error("Error executing shell script:", error);
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

  const path = generatePath(positionals[0]);

  return {
    path: path!,
    template: template! as TemplateType,
    verbose: verbose!,
  };
}

async function init() {
  console.log(await getArguments());
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

(async () => {
  init();
})();
