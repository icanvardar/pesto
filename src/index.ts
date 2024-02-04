import path from "path";
import { getArgs, preparePath, prepareTsConfig } from "./helpers";

async function init() {
  const { projectPath, template, verbose } = await getArgs();
  const projectName: string = path.basename(projectPath);

  try {
    await preparePath(projectPath);
  } catch(err: unknown) {
    throw new Error(err as unknown as string);
  }

  switch (template) {
    case "basic":
      console.log("basic template!");
      break;
    case "typescript":
      prepareTsConfig(projectPath);
      break;
    default:
      console.log("default");
      break;
  }
}

(async () => {
  init();
})();
