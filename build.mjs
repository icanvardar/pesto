import { $ } from "bun";

const result = await Bun.build({
  entrypoints: ["./index.ts"],
  outdir: "./out",
  target: "node",
  splitting: true,
  root: ".",
});

if (!result.success) {
  console.error("Build failed");
  for (const message of result.logs) {
    console.error(message);
  }
} else {
  await $`sh ./src/tasks/put_shebang_line.sh ./out/index.js`;
}
