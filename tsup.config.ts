import { defineConfig } from "tsup";

export default defineConfig( {
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	dts: "src/index.ts",
	splitting: false,
	sourcemap: true,
	clean: true
} );