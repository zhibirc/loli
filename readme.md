# loli &middot; [![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](LICENSE) ![Maintenance](https://img.shields.io/maintenance/yes/2021?color=brightgreen&style=flat-square) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-magenta.svg)]()

🚀 Comprehensive JavaScript Linter.


## Installation

```shell
npm install loli --save-dev
# or
npm i loli -D
```


## Usage

Add file `.eslintrc.js` to your project root with the following content:

```js
module.exports = {
    extends: require.resolve('loli')
};
```

Personally, I recommend to use **js** extension for `.eslintrc.*` files because of several benefits:

- any comments easily allowed, regardless of IDE's "JSON with Comments" mode
- less unnecessary noise due to double quotes absence
- slightly reduced file size because of the above
- probably more convenient way to parse/debug/edit compare to YAML formatted file
- ESLint itself gives it the highest priority

Tune **scripts** section in project's `package.json`, for example:

```json
{
    "scripts": {
        "lint": "eslint \"src/**/*.js\"",
        "lint:fix": "npm run lint -- --fix"
    }
}
```

For more efficient usage in real projects it's recommended to add "pre-commit" hook to ensure that potential problems are localized before getting into the code base.

Install required package:

```shell
# https://www.npmjs.com/package/pre-commit
npm install --save-dev pre-commit
# or
# https://www.npmjs.com/package/husky
npm install husky --save-dev
```

Then tune `package.json` file appropriately, for example:

```json
{
    "pre-commit": [
        "lint"
    ]
}
```

## But why? 😐

This package was conceived as one step further to automation in software development. Here I mean the frequently tedious project setup process.
Oftentimes, developer installs `eslint` separately, then usually installs the same plugins, then he begins to set up or search for sets of rules,
or even the whole team or part of it begins to waste time in discuss this. **loli** offers an abstraction layer for all (or, at least, for most) of this stuff.
The huge part of specified rules has been discussed and verified many times in different teams,
so there are good (subjectively, of course) reasons to use them and trust them in production code.


## License

**loli** is licensed under the terms of the [MIT license](./LICENSE).
