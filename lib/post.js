var fs = require('fs');
var path = require('path');

exports.register = function (server, options, next) {

	server.route({
		method: 'GET',
		path: '/blog/{filename*}',
		config: {
			description: 'return the post page',
			handler: function (request, reply) {

				var p = path.resolve('./posts');
				return reply.file(p + '/' + request.params.filename);
			}
		}
	});

	return next();
};

exports.register.attributes = {
	name: 'Post'
};