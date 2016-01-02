module.exports = function (post) {
  	return post.toString().split('\n')[0].replace(/<(?:.|\n)*?>/gm, '').trim();
};