type Dependency = Record<string, string>;

interface Dependencies {
  [key: string]: Dependency;
  tsDevDependencies: Dependency;
  basicDevDependencies: Dependency;
}

const tsDevDependencies: Dependency = {
  "@types/node": "^18.11.9",
  copyfiles: "^2.4.1",
  nodemon: "^2.0.20",
  "ts-node": "^10.9.1",
  typescript: "^4.8.4",
};

const basicDevDependencies: Dependency = {
  copyfiles: "^2.4.1",
  nodemon: "^2.0.20",
};

const dependencies = {
  tsDevDependencies,
  basicDevDependencies,
} satisfies Dependencies;

export default dependencies;
