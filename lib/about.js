exports.register = function (server, options, next) {

	server.route({
		method: 'GET',
		path: '/about',
		config: {
			description: 'return the about page',
			handler: function (request, reply) {

				return reply.view('about');
			}
		}
	});

	return next();
};

exports.register.attributes = {
	name: 'About'
};