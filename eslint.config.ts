import { defineConfig, globalIgnores } from "eslint/config"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"

export default defineConfig([
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx}"],
  },
  globalIgnores(["**/dist/**"]),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint as any,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-vars": "error",
    },
  },
])
