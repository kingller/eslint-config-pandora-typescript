module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:react/recommended',
        'plugin:jsx-control-statements/recommended',
        'plugin:import/typescript',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'prettier/react'
    ],
    "settings": {
        "react": {
            "version": "detect",
        }
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'jsx-control-statements', 'prettier'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        'jsx-control-statements/jsx-control-statements': true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        project: './tsconfig.json',
    },
    rules: {
        "prettier/prettier": 1,
        "no-console": ["warn", { allow: ['warn', 'error'] }],
        "eqeqeq": ["warn", "always"],
        "prefer-const": ["error", {"destructuring": "all", "ignoreReadBeforeAssign": true}],
        "no-underscore-dangle": 0,
        "no-plusplus": 0,
        "no-continue": 0,
        "no-useless-escape": 0,
        "import/no-named-as-default": 0,
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": 0,
        "@typescript-eslint/indent": ["error", 4, { VariableDeclarator: 4, SwitchCase: 1 }],
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-triple-slash-reference": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "@typescript-eslint/no-this-alias": 0,
        "@typescript-eslint/triple-slash-reference": ["error", { "path": "always", "types": "never", "lib": "never" }],
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/naming-convention": 0,
        // React相关校验规则
        "react/jsx-indent": [2, 4],
        "react/jsx-no-undef": [2, { allowGlobals: true }],
        "react/prop-types": 0,
        "react/jsx-no-target-blank": 0,
        "react/static-property-placement": 0,
        "react/require-default-props": 0,
        "jsx-control-statements/jsx-use-if-tag": 0,
        "jsx-control-statements/jsx-jcs-no-undef": 0
    }
};
