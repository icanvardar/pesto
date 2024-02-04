import { prepareEslint } from "./prepare-eslint";
import { prepareHusky } from "./prepare-husky";
import { preparePackageJson } from "./prepare-package-json";
import { preparePath } from "./prepare-path";
import { preparePrettier } from "./prepare-prettier";
import { prepareSrc } from "./prepare-src";
import { prepareTsConfig } from "./prepare-ts-config";

export async function prepareTemplate(projectName: string, projectPath: string, isTs: boolean) {
  try {
    await preparePath(projectPath);
  } catch (err: unknown) {
    throw new Error(err as unknown as string);
  }

  if (isTs) {
    prepareTsConfig(projectPath);
  }

  preparePackageJson(projectName, projectPath, isTs);
  prepareSrc(projectPath, isTs);
  prepareEslint(projectPath);
  preparePrettier(projectPath);
  prepareHusky(projectPath);
}
