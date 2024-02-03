const result = await Bun.build({
  entrypoints: ["./index.ts"],
  outdir: "./out",
  target: "node",
  splitting: true,
  root: "."
});

if (!result.success) {
  console.error("Build failed");
  for (const message of result.logs) {
    console.error(message);
  }
} else {
  console.log(result.outputs[0]);
}
