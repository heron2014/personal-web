require('env2')('.env');

exports.register = function (server, options, next) {

	server.route({
		method: 'POST',
        path: '/auth',
        config: {
        	description: 'authentication',
        	handler: function (request, reply) {

        	 	if (request.payload.password === process.env.PASSWORD) {

        	 		return reply.view('dashboard', {}, {layout: 'admin'});
        	 	} else {

        	 		return reply.redirect('/admin');
        	 	}
        	}
        }
	});
	return next();
};

exports.register.attributes = {
	name: 'Auth'
};