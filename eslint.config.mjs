import globals from 'globals'
import { configs as pluginJsConfigs } from '@eslint/js'
import { configs as tseslintConfigs } from '@typescript-eslint/eslint-plugin'
import { configs as pluginReactConfigs } from 'eslint-plugin-react'
import { default as typescriptEslintParser } from '@typescript-eslint/parser'

const eslintConfig = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: typescriptEslintParser,
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        semi: true,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: true,
        endOfLine: 'auto',
        'max-len': ['error', { code: 80 }],
        importOrder: [
          '^react(.*)$',
          '<THIRD_PARTY_MODULES>',
          './types',
          '^[.](?!.*.(scss|css)$).*$',
          '(.*).(scss|css)$',
        ],
        importOrderSeparation: true,
        importOrderSortSpecifiers: true,
      },
    ],
    '@typescript-eslint/no-namespace': 'off',
    'no-duplicate-imports': 'error',
  },
  overrides: [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJsConfigs.recommended,
    ...tseslintConfigs.recommended,
    pluginReactConfigs.flat.recommended,
  ],
}

export default eslintConfig
