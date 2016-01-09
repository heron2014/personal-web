var client = require('./es');
var unslug = require('./helpers/unslug');
exports.register = function (server, options, next) {
	server.route({
		method: 'GET',
		path: '/blog/{title}',
		config: {
			description: 'return article page',
			handler: function (request, reply) {
				
				var title = unslug(request.params.title);
				client.search({
					index: 'blog',
					type: 'articles',
					body: {
						query: {
							match_phrase: {
								title: title
							}
						}
					}
					
					
				}, function (error, response) {
					// if(!response.found) {
     //          			return reply('404').code(404);
     //        		}

     				response.hits.hits.forEach(function(article) {
     					console.log(article._source)
     					return reply.view('post', article._source);

     				})
            		
            		
				})
			} 
		}
	});	
	return next();
};

exports.register.attributes = {
	name: 'Article'
}