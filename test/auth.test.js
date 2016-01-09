require('env2')('.env');
var Code = require('code');
var Lab = require('lab');
var Hapi = require('hapi');
var Server = require('../lib');

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.experiment;
var it = lab.test;

describe('redirect to admin page if wrong password', function () {

  it('redirects to the admin page', function (done) {

    var options = {
      method: "POST",
      url: "/auth",
      // headers: { cookie: "token=" + token },
      // credentials: { id: "12", "name": "Simon", valid: true},
      payload: process.env.PASSWORD
      
    };

    Server.init(0, function (err, server) {

      expect(err).to.not.exist();

      server.inject(options, function (res) {

        expect(res.statusCode).to.equal(200);

        server.stop(done);
      });
    });
  });
});