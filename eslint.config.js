import { fixupPluginRules } from '@eslint/compat';
import eslintJS from "@eslint/js"
import globals from "globals"
//import eslintPluginStorybook from "eslint-plugin-storybook" // does not support eslint v9
import eslintPluginReact from "eslint-plugin-react"
import eslintPluginReactHooks from "eslint-plugin-react-hooks"
import eslintPluginReactRefresh from "eslint-plugin-react-refresh"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
  {
    extends: [
      eslintJS.configs.recommended,
      ...typescriptEslint.configs.recommendedTypeChecked,
      eslintConfigPrettier,
      eslintPluginReact.configs.flat["jsx-runtime"],
    ],
    files: ["src/**/*.ts", "src/**/*.tsx"],
    ignores: [
      "eslint.config.js",
      "vite.config.ts",
      "postcss.config.mjs",
      "tailwind.config.js",
      "commitlint.config.cjs",
      "playwright.config.ts",
      "vitest.setup.ts",
      "src/routeTree.gen.ts"
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: "latest",
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.builtin,
        ...globals.browser,
        ...globals.es2025
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error"
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
      "react-hooks": fixupPluginRules(eslintPluginReactHooks),
      "react-refresh": eslintPluginReactRefresh,
    },
    rules: {
      "no-await-in-loop": "error",
      "no-constant-binary-expression": "error",
      "no-duplicate-imports": "error",
      "no-new-native-nonconstructor": "error",
      "no-promise-executor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-unused-private-class-members": "error",
      "no-use-before-define": "error",
      "require-atomic-updates": "error",
      "camelcase": "error",
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": ["error", { "default": "generic" }],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "no-return-await": "off",
      "@typescript-eslint/return-await": "error",
      "react-refresh/only-export-components": [
        "warn",
        { "allowConstantExport": true }
      ],
      "unicorn/custom-error-definition": "error",
      "unicorn/empty-brace-spaces": "error",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-console-spaces": "error",
      "unicorn/no-null": "off",
      "unicorn/filename-case": [
        "error",
        {
          "cases": {
            "kebabCase": true,
            "pascalCase": true
          }
        }
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          "replacements": {
            "db": false,
            "arg": false,
            "args": false,
            "env": false,
            "fn": false,
            "func": {
              "fn": true,
              "function": false
            },
            "prop": false,
            "props": false,
            "ref": false,
            "refs": false
          },
          "ignore": ["semVer", "SemVer"]
        }
      ]
    }

  }
)
