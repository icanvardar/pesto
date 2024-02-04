const eslintOptions = {
  /* Linter rules */
  "rules": {
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ]
  },

  /* Scripting options */
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },

  /* Parser configs */
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "project": "./tsconfig.json",
    "tsconfigRootDir": "."
  },
  "globals": {
    "global": false,
    "Promise": false
  },

  /* Plugin and extension configurations */
  "plugins": ["@typescript-eslint", "eslint-plugin-node"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"]
}

export default eslintOptions;
