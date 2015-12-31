exports.register = function (server, options, next) {

	server.route({
		method: 'GET',
		path: '/contact',
		config: {
			description: 'return the contact page',
			handler: function (request, reply) {

				return reply.view('contact');
			}
		}
	});

	return next();
};

exports.register.attributes = {
	name: 'Contact'
};