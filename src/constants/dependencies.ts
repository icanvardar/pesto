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
    "@typescript-eslint/eslint-plugin": "^6.19.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-node": "^11.1.0",
    husky: "^9.0.6",
    "lint-staged": "^15.2.0",
    prettier: "^3.2.4",
    "@tsconfig/recommended": "^1.0.3",
};

const dependencies = {
    basicDevDependencies,
    tsDevDependencies,
} satisfies Dependencies;

export default dependencies;
