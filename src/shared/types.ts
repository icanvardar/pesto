import ts from "typescript";

type CompilerOptions = typeof ts.parseCommandLine extends (
  ...args: any[]
) => infer TResult
  ? TResult extends { options: infer TOptions }
    ? TOptions
    : never
  : never;
  
type TypeAcquisition = typeof ts.parseCommandLine extends (
  ...args: any[]
) => infer TResult
  ? TResult extends { typeAcquisition?: infer TTypeAcquisition }
    ? TTypeAcquisition
    : never
  : never;

export interface TSConfig {
  $schema: string;
  compilerOptions: CompilerOptions;
  exclude: string[];
  compileOnSave?: boolean;
  extends: string;
  files?: string[];
  include: string[];
  typeAcquisition?: TypeAcquisition;
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