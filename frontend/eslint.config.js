import js from "@eslint/js";
import tseslint from "typescript-eslint";
import tseslintParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default tseslint
  .config(
    { ignores: ["dist"] },
    {
      extends: [
        js.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
      ],
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parser: tseslintParser,
        parserOptions: {
          project: ["./tsconfig.node.json", "./tsconfig.app.json"],
          tsconfigRootDir: import.meta.dirname,
        },
      },
      settings: {
        react: { version: "18.3" },
      },
      plugins: {
        react,
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },
      rules: {
        ...react.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules,
        ...reactHooks.configs.recommended.rules,
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      },
    },
  )
  .concat(eslintPluginPrettier);
