// eslint.config.js
import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  // Never lint build artifacts
  { ignores: ["**/build/**", "build/**", "dist/**", "node_modules/**"] },

  js.configs.recommended,
  ...ts.configs.recommended,

  {
    // Lint your source only; prevents wandering into build/
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        // If you have TS:
        // comment this out if you don't use TypeScript project references
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks
    },
    settings: {
      react: { version: "detect" }
    },
    rules: {
      // React 17+
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TS (these only apply if files are TS/TSX)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ]
    }
  }
];