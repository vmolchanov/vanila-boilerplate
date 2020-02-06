const WARNING = 1;
const ERROR = 2;

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        window: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'no-await-in-loop': ERROR,
        'no-console': ERROR,
        'no-dupe-else-if': WARNING,
        'no-import-assign': ERROR,
        'no-setter-return': ERROR,
        'no-template-curly-in-string': ERROR,
        'accessor-pairs': WARNING,
        'array-callback-return': ERROR,
        'class-methods-use-this': WARNING,
        'curly': ERROR,
        'default-case': WARNING,
        'default-param-last': ERROR,
        'dot-location': ['error', 'property'],
        'dot-notation': ERROR,
        'eqeqeq': ERROR,
        'grouped-accessor-pairs': ERROR,
        'max-classes-per-file': ERROR,
        'no-alert': ERROR,
        'no-caller': ERROR,
        'no-case-declarations': WARNING,
        'no-else-return': ERROR,
        'no-empty-function': ERROR,
        'no-eq-null': ERROR,
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-floating-decimal': ERROR,
        'no-implicit-coercion': ERROR,
        'no-implicit-globals': ERROR,
        'no-implied-eval': ERROR,
        'no-invalid-this': ERROR,
        'no-iterator': ERROR,
        'no-labels': ERROR,
        'no-lone-blocks': ERROR,
        'no-loop-func': ERROR,
        'no-multi-spaces': ERROR,
        'no-multi-str': ERROR,
        'no-new': ERROR,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR,
        'no-octal-escape': ERROR,
        'no-param-reassign': WARNING,
        'no-proto': ERROR,
        'no-return-assign': ERROR,
        'no-return-await': ERROR,
        'no-script-url': ERROR,
        'no-self-compare': WARNING,
        'no-sequences': ERROR,
        'no-throw-literal': ERROR,
        'no-useless-concat': WARNING,
        'no-useless-return': ERROR,
        'no-void': ERROR,
        'no-with': ERROR,
        'radix': ['error', 'as-needed'],
        'require-await': ERROR,
        'yoda': ERROR,
        'no-undef-init': ERROR,
        'no-undefined': ERROR,
        'no-use-before-define': ERROR,
        'global-require': ERROR,
        'handle-callback-err': WARNING,
        'no-new-require': ERROR,
        'no-path-concat': ERROR,
        'array-bracket-newline': ['error', {
            minItems: 2
        }],
        'array-bracket-spacing': ERROR,
        'array-element-newline': ['error', {
            minItems: 2
        }],
        'block-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false
        }],
        'camelcase': ERROR,
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'eol-last': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': ERROR,
        'func-style': ['error', 'expression'],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', {
            minItems: 4
        }],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'jsx-quotes': ['error', 'prefer-single'],
        'key-spacing': ['error', {
            mode: 'strict'
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true
        }],
        'line-comment-position': ['error', {
            position: 'above'
        }],
        'lines-between-class-members': ['error', 'always'],
        'max-depth': ['error', 4],
        'max-len': ['error', {
            code: 120,
            comments: 120
        }],
        'max-nested-callbacks': ['error', 3],
        'multiline-ternary': ['error', 'always'],
        'new-cap': ['error', {
            newIsCap: true,
            capIsNew: true
        }],
        'new-parens': ERROR,
        'newline-per-chained-call': ['error', {
            ignoreChainWithDepth: 2
        }],
        'no-inline-comments': ERROR,
        'no-lonely-if': WARNING,
        'no-multi-assign': ERROR,
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxBOF: 1,
            maxEOF: 1
        }],
        'no-nested-ternary': ERROR,
        'no-tabs': ERROR,
        'no-underscore-dangle': ['error', {
            allowAfterThis: true
        }],
        'no-unneeded-ternary': WARNING,
        'no-whitespace-before-property': ERROR,
        'nonblock-statement-body-position': ['error', 'below'],
        'object-curly-newline': ['error', {
            multiline: true,
            minProperties: 1,
            consistent: true
        }],
        'object-curly-spacing': ['error', 'never'],
        'object-property-newline': ERROR,
        'one-var': ['error', 'never'],
        'padded-blocks': ['error', 'never'],
        'prefer-exponentiation-operator': ERROR,
        'quote-props': ['error', 'as-needed'],
        'quotes': ['error', 'backtick'],
        'semi': ERROR,
        'semi-spacing': ERROR,
        'semi-style': ['error', 'last'],
        'space-before-blocks': ERROR,
        'space-before-function-paren': ['error', {
            asyncArrow: 'always',
            named: 'never',
            anonymous: 'never'
        }],
        'space-in-parens': ERROR,
        'space-infix-ops': ERROR,
        'space-unary-ops': ERROR,
        'spaced-comment': ['error', 'always'],
        'switch-colon-spacing': ['error', {
            after: true,
            before: false
        }],
        'template-tag-spacing': ERROR,
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': ERROR,
        'constructor-super': ERROR,
        'no-confusing-arrow': ERROR,
        'no-duplicate-imports': ERROR
    }
};
