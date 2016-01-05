require('env2')('.env');
var Code = require('code');
var Lab = require('lab');
var Hapi = require('hapi');
var Server = require('../lib');

var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.experiment;
var it = lab.test;

describe('submit the post when authenticated', function () {

  it('redirects to the blog page with new post', function (done) {

    var article = {
        title: 'first post',
        description: 'testing',
        published_at: new Date()
    };

    var options = {
        method: "GET",
        url: "/blog/first-post",
        payload: article
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