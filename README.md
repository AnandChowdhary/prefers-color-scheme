# 🎨 Prefers color scheme

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/prefers-color-scheme.svg)](https://travis-ci.org/AnandChowdhary/prefers-color-scheme)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/prefers-color-scheme/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/prefers-color-scheme?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/prefers-color-scheme.svg)](https://github.com/AnandChowdhary/prefers-color-scheme/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/prefers-color-scheme.svg)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/prefers-color-scheme.svg)](https://www.npmjs.com/package/prefers-color-scheme)

prefers-color-scheme is a web/DOM library starter with these features:

## ⭐ Usage

Add the dependency from NPM:

```bash
npm install prefers-color-scheme
```

Import the package:

```js
import prefersColorScheme from "prefers-color-scheme";
```

Then call the function:

```js
const colorScheme = prefersColorScheme();
// Returns "light" or "dark"
```

## 💡 Browser support

This package only works in browsers that natively support `@media (prefers-color-scheme)`, so it just returns `"light"` in unsupported browsers. [Current browser support](https://caniuse.com/#feat=prefers-color-scheme)

By passing `false` as the argument, you can get `"unsupported"` as the value for unsupported browsers:

```js
const colorScheme = prefersColorScheme(false);
// Returns "light", "dark", or "unsupported"
```

## 🛠️ Development

Install dependencies:

```bash
yarn
```

Compile Typescript to ES6 before publishing to NPM:

```bash
yarn build
```

## 📝 License

MIT
