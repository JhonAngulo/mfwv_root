const Rules = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json']
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true
      },
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react',
    'react-refresh',
    '@typescript-eslint',
    'jsx-a11y',
    'prettier'
  ],
  rules: {
    'prettier/prettier': Rules.ERROR,
    '@typescript-eslint/explicit-function-return-type': Rules.OFF,
    '@typescript-eslint/prefer-nullish-coalescing': Rules.OFF,
    '@typescript-eslint/strict-boolean-expressions': Rules.OFF,
    'react/react-in-jsx-scope': Rules.OFF,
    'react-refresh/only-export-components': [
      Rules.ERROR,
      { allowConstantExport: true }
    ],
    'no-restricted-imports': [
      Rules.ERROR,
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: 'React default is automatically imported by vite.'
          }
        ]
      }
    ]
  }
}
