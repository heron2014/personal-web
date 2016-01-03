var client = require('./es');

exports.register = function (server, options, next) {

	server.route({
		method: 'GET',
		path: '/blog',
		config: {
			description: 'return the blog page',
			handler: function (request, reply) {

				client.search({
					index: 'blog',
					type: 'articles'
				}, function (error, response) {

					var results = []

					response.hits.hits.forEach(function (article) {
						var articles = article._source;
						articles.id = article._id;
						results.push(articles);
					});

					return reply.view('blog', {articles: results});
				});
				
			}
		}
	});

	return next();
};

exports.register.attributes = {
	name: 'Blog'
};