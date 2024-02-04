import { Dependencies, Dependency } from "../shared/types";

const basicDevDependencies: Dependency = {
  copyfiles: "^2.4.1",
  nodemon: "^2.0.20",
};

const tsDevDependencies: Dependency = {
  "@types/node": "^18.11.9",
  copyfiles: "^2.4.1",
  nodemon: "^2.0.20",
  "ts-node": "^10.9.1",
  typescript: "^4.8.4",
};

const dependencies = {
  basicDevDependencies,
  tsDevDependencies,
} satisfies Dependencies;

export default dependencies;
