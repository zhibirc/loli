/**
 * Core linting settings.
 *
 * Consider the rule values notation being used:
 * - "off" or 0 to turn the rule off
 * - "warn" or 1 to turn the rule on as a warning (doesn't affect exit code)
 * - "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 *
 * @license The MIT License (MIT)
 * @author Yaroslav Surilov <zhibirc.echo@gmail.com>
 */


'use strict';

const OFF = 0;
const WARN = 1;
const ERROR = 2;


module.exports = {
    env: {
        browser:  true,
        node:     true,
        es2021:   true,
        commonjs: true
    },

    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:security/recommended'
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: 'module'
    },

    plugins: [
        'jsdoc',
        'react',
        'no-secrets',
        'no-unsanitized',
        'security'
    ],

    settings: {
        jsdoc: {
            tagNamePreference: {
                returns:  'return',
                augments: 'extends',
                class:    'constructor'
            }
        }
    },

    rules: {
        // specific rules for JSDoc notation
        'jsdoc/check-access': OFF,
        'jsdoc/check-alignment': WARN,
        'jsdoc/check-examples': WARN,
        'jsdoc/check-indentation': WARN,
        'jsdoc/check-line-alignment': WARN,
        'jsdoc/check-param-names': WARN,
        'jsdoc/check-property-names': WARN,
        'jsdoc/check-syntax': OFF,
        'jsdoc/check-tag-names': WARN,
        'jsdoc/check-types': WARN,
        'jsdoc/check-values': WARN,
        'jsdoc/empty-tags': WARN,
        'jsdoc/implements-on-classes': WARN,
        'jsdoc/match-description': OFF,
        'jsdoc/multiline-blocks': WARN,
        'jsdoc/newline-after-description': WARN,
        'jsdoc/no-bad-blocks': WARN,
        'jsdoc/no-defaults': OFF,
        'jsdoc/no-missing-syntax': OFF,
        'jsdoc/no-multi-asterisks': WARN,
        'jsdoc/no-restricted-syntax': OFF,
        'jsdoc/no-types': OFF,
        'jsdoc/no-undefined-types': WARN,
        'jsdoc/require-asterisk-prefix': WARN,
        'jsdoc/require-description': WARN,
        'jsdoc/require-description-complete-sentence': OFF,
        'jsdoc/require-example': OFF,
        'jsdoc/require-file-overview': OFF,
        'jsdoc/require-hyphen-before-param-description': WARN,
        'jsdoc/require-jsdoc': OFF,
        'jsdoc/require-param': WARN,
        'jsdoc/require-param-description': WARN,
        'jsdoc/require-param-name': WARN,
        'jsdoc/require-param-type': WARN,
        'jsdoc/require-property': WARN,
        'jsdoc/require-property-description': WARN,
        'jsdoc/require-property-name': WARN,
        'jsdoc/require-property-type': WARN,
        'jsdoc/require-returns': WARN,
        'jsdoc/require-returns-check': WARN,
        'jsdoc/require-returns-description': WARN,
        'jsdoc/require-returns-type': WARN,
        'jsdoc/require-throws': WARN,
        'jsdoc/require-yields': WARN,
        'jsdoc/require-yields-check': WARN,
        'jsdoc/tag-lines': WARN,
        'jsdoc/valid-types': WARN,

        // search for potential secrets/keys
        'no-secrets/no-secrets': ERROR,

        // disallow unsanitized code
        'no-unsanitized/method': ERROR,
        'no-unsanitized/property': ERROR
    }
};
