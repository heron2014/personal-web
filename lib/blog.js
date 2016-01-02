var fs = require('fs');
var path = require('path');
var getTitle = require('./helpers/getTitle');

exports.register = function (server, options, next) {

	server.route({
		method: 'GET',
		path: '/blog',
		config: {
			description: 'return the blog page',
			handler: function (request, reply) {

				
				var files = fs.readdirSync(path.resolve('./posts'))
				var posts = [];
				var remaining = files.length;
				// console.log('files', files);
				// var htmls = files.map(function(file) {
				//     if(path.extname(file).toLowerCase() === '.html') {
				//       return file;
				//     }
				// });

				files.map(function(file) {
					var filepath = path.normalize('./posts/' + file);
					// console.log(filepath);
					fs.stat(filepath, function(err, stats) {
						if(err) {
							throw err;
						}

						if (!err) {
							fs.readFile(filepath, 'utf8', function (error, data) {
								if (error) throw error;
								 // console.log('Data', data)
								var post = {};
								post.path = filepath.split('/')[1];
								// console.log('PATH',post.path);
								
								post.title = getTitle(data);

							
								post.mtime = stats.mtime;

								posts.push(post);
								// console.log('POST1', posts);
								
								if (--remaining === 0) {
									posts.sort(function (a,b) {
										return b.mtime - a.mtime;
									});								
								}
							});
							console.log('posts', posts);
						}
						console.log('posts', posts);
					});

				});

				return reply.view('blog', {posts: posts});
				
			}

		}
	});

	return next();
};

exports.register.attributes = {
	name: 'Blog'
};