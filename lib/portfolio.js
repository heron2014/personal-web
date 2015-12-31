exports.register = function (server, options, next) {

	server.route({
		method: 'GET',
		path: '/portfolio',
		config: {
			description: 'return the portfolio page',
			handler: function (request, reply) {

				return reply.view('portfolio');
			}
		}
	});

	return next();
};

exports.register.attributes = {
	name: 'Portfolio'
};