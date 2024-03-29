import { generatePath } from "./generate-path";
import { getArgs } from "./get-args";
import { installDependencies } from "./install-dependencies";
import { prepareEslint } from "./prepare-eslint";
import { prepareHusky } from "./prepare-husky";
import { preparePackageJson } from "./prepare-package-json";
import { preparePath } from "./prepare-path";
import { preparePrettier } from "./prepare-prettier";
import { prepareSrc } from "./prepare-src";
import { prepareTemplate } from "./prepare-template";
import { prepareTsConfig } from "./prepare-ts-config";
import { runScript } from "./run-script";

/* -------------------------------------------------------------------------- */
/*                              EXPORTING HELPERS                             */
/* -------------------------------------------------------------------------- */
export {
    generatePath,
    getArgs,
    installDependencies,
    prepareEslint,
    prepareHusky,
    preparePackageJson,
    preparePath,
    preparePrettier,
    prepareSrc,
    prepareTemplate,
    prepareTsConfig,
    runScript,
};
