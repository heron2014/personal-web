var Code = require('code');
var Lab = require('lab');

var lab = exports.lab = Lab.script();
var describe = lab.experiment;
var expect = Code.expect;
var it = lab.test;
var unslug = require('../lib/helpers/unslug.js');

describe('transforms dashes into spaces', function () {
 
  it('returns string with spaces instead of dashes', function (done) {
     expect(unslug('my-first-post')).to.equal('my first post');
     done();
  });
});