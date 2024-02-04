import path from "path";
import { getArgs, prepareTemplate } from "./helpers";

async function init() {
  const { projectPath, template, verbose } = await getArgs();
  const projectName: string = path.basename(projectPath);
  let isTs: boolean = template === "typescript" ? true : false;

  try {
    await prepareTemplate(projectName, projectPath, isTs);
  } catch(err: unknown) {
    throw new Error(err as unknown as string);
  }
}

(async () => {
  init();
})();
