
var test = require('tap').test;
var execstream = require('./execspawn.js');
var endpoint = require('endpoint');

test('simple test', function (t) {
  execstream('echo "hallo world";').stdout.pipe(endpoint(function (err, out) {
    t.equal(err, null);
    t.equal(out.toString(), 'hallo world\n');
    t.end();
  }));
});
