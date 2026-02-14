import { defineConfig } from "tsup"

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  splitting: false,
  format: ["esm", "cjs", "iife"],
  dts: true,
  minify: !options.watch,
  sourcemap: true,
  clean: true,
}))
