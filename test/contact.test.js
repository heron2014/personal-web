require('env2')('.env');
var Code = require('code');
var Lab = require('lab');
var Hapi = require('hapi');
var Server = require('../lib');

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var it = lab.test;

it('returns contact page with status code 200', function (done) {

  Server.init(0, function (err, server) {

    expect(err).to.not.exist();
    var request = {
    	method: 'GET',
    	url: '/contact'
    }

    server.inject(request, function (res) {
    	expect(res.statusCode, 'status code').to.equal(200);
    	server.stop(done);
    });   
  });
});