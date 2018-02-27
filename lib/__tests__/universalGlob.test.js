'use strict';

const assert = require('assert');
const glob = require('../index.js');

describe('universalGlob', () => {
  it('glob uses callbacks', done => {
    glob('./lib/__tests__/**', (err, files) => {
      if (err) throw err;
      assert(files.length === 2);
      done();
    });
  });

  it('glob uses promises', () => {
    return glob('./lib/__tests__/*').then(files => {
      assert(files.length === 1);
    });
  });

  it('glob.glob uses callbacks', done => {
    glob.glob('./lib/__tests__/**', (err, files) => {
      if (err) throw err;
      assert(files.length === 2);
      done();
    });
  });

  it('glob.glob uses promises', () => {
    return glob.glob('./lib/__tests__/*').then(files => {
      assert(files.length === 1);
    });
  });

  it('glob.sync', () => {
    const files = glob.sync('./lib/__tests__/*');
    assert(files.length === 1);
  });

  it('glob.Glob uses callbacks', done => {
    let g;
    return Promise.resolve(true).then(() => {
      g = new glob.Glob('./lib/__tests__/**', (err, files) => {
        if (err) throw err;
        assert(files.length === 2);
      });
      assert(g.pattern === './lib/__tests__/**');
      done();
    });
  });

  it('glob.hasMagic', () => {
    assert(glob.hasMagic('/a/b/c') === false);
    assert(glob.hasMagic('/a/b/{c,d}') === true);
    assert(glob.hasMagic('/a/b/c/*') === true);
  });
});
