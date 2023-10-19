import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	dts: true,
	target: "esnext",
	clean: true,
	splitting: false,
	format: ["esm"],
	keepNames: true,
	minify: true,
	bundle: true,
	shims: true,
	sourcemap: false,
});
