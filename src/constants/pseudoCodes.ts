import { PseudoCode, PseudoCodes } from "../shared/types";

const pseudoCodeForBasic: PseudoCode = `
    export function greet() {
        return "Hello, World!";
    }
`;

const pseudoCodeForTypescript: PseudoCode = `
    export function greet(): string {
        return "Hello, World!";
    }
`;

const pseudoCodes = {
  pseudoCodeForBasic,
  pseudoCodeForTypescript,
} satisfies PseudoCodes;

export default pseudoCodes;
