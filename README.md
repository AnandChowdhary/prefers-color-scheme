# 🎨 Prefers color scheme

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/prefers-color-scheme.svg)](https://travis-ci.org/AnandChowdhary/prefers-color-scheme)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/prefers-color-scheme/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/prefers-color-scheme?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/prefers-color-scheme.svg)](https://github.com/AnandChowdhary/prefers-color-scheme/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/prefers-color-scheme.svg)
![NPM type definitions](https://img.shields.io/npm/types/prefers-color-scheme.svg)
[![NPM](https://img.shields.io/npm/v/prefers-color-scheme.svg)](https://www.npmjs.com/package/prefers-color-scheme)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/prefers-color-scheme.svg)](https://www.npmjs.com/package/prefers-color-scheme)

[![NPM](https://nodei.co/npm/prefers-color-scheme.png)](https://www.npmjs.com/package/prefers-color-scheme)

Prefers color scheme is a package that tells you a user's preferred color scheme. It's based on the CSS `@media (prefers-color-scheme)`. It's around 700 bytes minified, 300 bytes gzipped.

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

## 📀 Media Queries Level 5

- 🙅 `prefers-reduced-motion` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-motion) · [NPM](https://www.npmjs.com/package/prefers-reduced-motion)
- 🎨 `prefers-color-scheme` · [GitHub](https://github.com/AnandChowdhary/prefers-color-scheme) · [NPM](https://www.npmjs.com/package/prefers-color-scheme)
- 🕶️ `prefers-contrast` · [GitHub](https://github.com/AnandChowdhary/prefers-contrast) · [NPM](https://www.npmjs.com/package/prefers-contrast)
- 🎞️ `prefers-reduced-transparency` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-transparency) · [NPM](https://www.npmjs.com/package/prefers-reduced-transparency)
- 🌑 `inverted-colors` · [GitHub](https://github.com/AnandChowdhary/inverted-colors) · [NPM](https://www.npmjs.com/package/inverted-colors)
- 🧖 `environment-blending` · [GitHub](https://github.com/AnandChowdhary/environment-blending) · [NPM](https://www.npmjs.com/package/environment-blending)
- 💡 `light-level` · [GitHub](https://github.com/AnandChowdhary/light-level) · [NPM](https://www.npmjs.com/package/light-level-css)

## 📝 License

MIT
