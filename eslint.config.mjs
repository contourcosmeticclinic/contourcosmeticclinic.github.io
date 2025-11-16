import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // ❗ Strict unused imports/vars
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      // Disable specific react-hooks warnings
      "react-hooks/exhaustive-deps": "off", // disables dependency warning in useEffect
      "react-hooks/rules-of-hooks": "error", // keep actual hooks usage checked

      // Disable memoization warning
      "react-hooks/preserve-manual-memoization": "off",

      // Best practices
      "prefer-const": "error",
      "no-var": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],

      "react/react-in-jsx-scope": "off",

      // Style rules
      "no-multiple-empty-lines": ["error", { max: 1 }],
      indent: ["error", 2],
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
]);

export default eslintConfig;
