var Hapi = require('hapi');
var Handlebars = require('handlebars');
var Inert = require('inert'); //Static file and directory handlers plugin for hapi.js
var Vision = require('vision'); //Templates rendering support for hapi.js 

var About = require('./about');
var Admin = require('./admin');
var Auth = require('./auth');
var Assets = require('./assets');
var Article = require('./article');
var Blog = require('./blog');
var Contact = require('./contact');
var Create = require('./create');
var Home = require('./home');
var Portfolio = require('./portfolio');

exports.init = function (port, next) {

	var server = new Hapi.Server();
	server.connection({port: port});

	var plugins = [Inert, Vision, Assets, About, Admin, Auth, Article, Blog, Contact, Create, Home, Portfolio];

	server.register(plugins, function (err) {
		
		// $lab:coverage:off$
		if (err) {
			return next(err);
		}
		// $lab:coverage:on$

		server.views({
			engines: {
				html: Handlebars
			},
			relativeTo: __dirname + '/../views',
			path: '.',
			layout: true,
			layoutPath: 'layout',
			helpersPath: 'helpers',
			partialsPath: 'partials'
		});

		server.start(function (err) {

			return next(err, server);
		});
	});
};	