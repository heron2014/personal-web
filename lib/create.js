var client = require('./es');

exports.register = function (server, options, next) {

	server.route({
		method: 'POST',
		path: '/create',
		config: {
			description: 'create new article',
			handler: function (request, reply) {

				client.index({
					index: 'blog',
					type: 'articles',
					body: {
						title: request.payload.title,
						content: request.payload.content,
						published: true,
						published_at: new Date()
					}
				}, function (error, response) {
					return reply.redirect('blog');
				});
				
			}
		}
	});

	return next();
};

exports.register.attributes = {
	name: 'Create'
};