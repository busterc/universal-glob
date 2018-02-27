'use strict';

const u = require('universalify').fromCallback;
const _glob = require('glob');

let glob = u(_glob);
Object.keys(_glob).forEach(key => {
  glob[key] =
    typeof _glob[key] === 'function' && key.match(/^glob$/) ? u(_glob[key]) : _glob[key];
});

module.exports = glob;
