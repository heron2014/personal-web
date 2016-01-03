var client = require('./es');
var slug = require('./helpers/slug');
exports.register = function (server, options, next) {
	server.route({
		method: 'GET',
		path: '/blog/{id}',
		config: {
			description: 'return article page',
			handler: function (request, reply) {

				console.log(request.params.id);
				client.get({
					index: 'blog',
					type: 'articles',
					id: request.params.id.toString()
					
					
				}, function (error, response) {
					// if(!response.found) {
     //          			return reply('404').code(404);
     //        		}
     				console.log(response);
            		console.log(response._source.title);
            		return reply('post page', response._source);
				})
			} 
		}
	});	
	return next();
};

exports.register.attributes = {
	name: 'Article'
}