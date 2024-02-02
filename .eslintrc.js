// Modified from Microsoft Graph JavaScript SDK change version Feb 10, 2022, https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/master/.eslintrc.json
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js', 'mock', 'vite-env.d.ts'],
  parser: 'vue-eslint-parser', // Specifies the ESLint parser
  parserOptions: {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ecmaVersion: 12,
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
  },
  plugins: ['vue', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off', // FIXME: hard check
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        filter: {
          regex: '^(__String|[A-Za-z]+_[A-Za-z]+)$',
          match: false,
        },
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
        filter: {
          regex: '^I(Arguments|TextWriter|O([A-Z][a-z]+[A-Za-z]*)?)$',
          match: false,
        },
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        filter: {
          regex: '^(_{1,2}filename|_{1,2}dirname|_+|[A-Za-z]+_[A-Za-z]+)$',
          match: false,
        },
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        filter: {
          regex: '^[A-Za-z]+_[A-Za-z]+$',
          match: false,
        },
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        filter: {
          regex: '^(_+|[A-Za-z]+_[A-Z][a-z]+)$',
          match: false,
        },
      },
      {
        selector: 'method',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        filter: {
          regex: '^[A-Za-z]+_[A-Za-z]+$',
          match: false,
        },
      },
      {
        selector: 'memberLike',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        filter: {
          regex: '^[A-Za-z]+_[A-Za-z]+$',
          match: false,
        },
      },
      {
        selector: 'enumMember',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
        filter: {
          regex: '^[A-Za-z]+_[A-Za-z]+$',
          match: false,
        },
      },
      {
        selector: 'property',
        format: null,
      },
    ],
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single', // FIXME: CAS change to single quote
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/space-within-parens': ['off', 'never'],
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowTernary: true,
      },
    ],
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-useless-catch': 'error',
    'prefer-rest-params': 'off',
    'no-constant-condition': 'error',
    'brace-style': 'error',
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'dot-notation': 'off',
    eqeqeq: 'error',
    'new-parens': 'error',
    'no-caller': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-new-func': 'off',
    'no-new-wrappers': 'error',
    'no-return-await': 'off',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'quote-props': 'off',
    'space-in-parens': 'error',
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
};
