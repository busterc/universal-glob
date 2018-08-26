# universal-glob [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

> drop-in replacement for glob lets you use promises or callbacks.

## Prerequisites

* When installed, uses `glob@latest`
* Backwards compatible to `glob@3.0.0`
* `glob.Glob` constructor is not promisified`

## Installation

```sh
$ npm install --save universal-glob
```

## Usage

```js
const glob = require('universal-glob');

// use callbacks
glob(pattern, options, callback);

// use promises
glob(pattern, options).then(results => {
  // ...
});

// use sync
let results = glob.sync(pattern);
```

## License

ISC © [Buster Collings](https://about.me/buster)

[npm-image]: https://badge.fury.io/js/universal-glob.svg
[npm-url]: https://npmjs.org/package/universal-glob
[travis-image]: https://travis-ci.org/busterc/universal-glob.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/universal-glob
[daviddm-image]: https://david-dm.org/busterc/universal-glob.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/universal-glob
[coveralls-image]: https://coveralls.io/repos/busterc/universal-glob/badge.svg
[coveralls-url]: https://coveralls.io/r/busterc/universal-glob
[greenkeeper-image]: https://badges.greenkeeper.io/busterc/universal-glob.svg
[greenkeeper-url]: https://greenkeeper.io/
