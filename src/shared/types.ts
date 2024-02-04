import type { TsConfigJson } from "type-fest";

export interface TsConfigJsonExtended extends TsConfigJson {
  $schema: string;
  "ts-node": {
    files: boolean;
  };
}

export type TemplateType = "basic" | "typescript";

export interface Args {
  projectPath: string;
  template: TemplateType;
  verbose: boolean;
}

export type Dependency = Record<string, string>;

export interface Dependencies {
  [key: string]: Dependency;
  basicDevDependencies: Dependency;
  tsDevDependencies: Dependency;
}

export type PseudoCode = string;

export interface PseudoCodes {
  [key: string]: string;
}