import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default withNuxt(
  {
    ignores: ["**/components.d.ts"],
  },
  eslintConfigPrettier,
  {
    files: ["**/*.ts", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "tailwindcss/no-custom-classname": [
        "warn",
        {
          callees: ["cn", "class", "twMerge", "apply"],
          // cssFiles: ["**/*.css", "!**/node_modules", "!**/.*", "!**/dist", "!**/build"],
          config: "./tailwind.config.js",
          classRegex: "class$",
        },
      ],
      "tailwindcss/no-unnecessary-arbitrary-value": "warn",
      "tailwindcss/no-contradicting-classname": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/enforces-negative-arbitrary-values": "off",
      "tailwindcss/classnames-order": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeAlias",
          format: ["PascalCase"],
          prefix: ["I"],
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-empty-object-type": "off",
      "func-style": ["error", "expression", { allowArrowFunctions: true }],
      "vue/component-tags-order": [
        "error",
        {
          order: ["script", "template", "style"],
        },
      ],
      "vue/no-multiple-template-root": "off",
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
      "vue/html-self-closing": "off",
      "vue/component-name-in-template-casing": [
        "error",
        "PascalCase",
        {
          registeredComponentsOnly: false,
        },
      ],
      "no-console": "off",
    },
  },
);
