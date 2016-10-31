 var express = require('express');
 var bodyParser = require('body-parser');
 var users = require('./users.json');

 var app = module.exports = express();
 app.use(bodyParser.json());

 function addId(req, res, next) {
 	req.body.id = users.length + 1;
 	next();
 }

 app.get('/api/users', function(req, res, next) {
 	var filter = req.query;
 	var newUsers = [];

 	for (var i = 0; i < users.length; i++) {
 		var flag = true;

 		for (var key in filter) {
 			if (filter[key] !== users[i][key]) {
 				flag = false;
 			}
 		}

 		if (flag) {
 			newUsers.push(users[i]);
 		}
 	}

 	res.status(200)
 		.json(newUsers);
 });
 app.get('/api/users/admin', function(req, res, next) {
 	var newUsers = [];

 	for (var i = 0; i < users.length; i++) {
 		if (users[i].type === 'admin') {
 			newUsers.push(users[i]);
 		}
 	}

 	res.status(200)
 		.json(newUsers);
 });
 app.get('/api/users/moderator', function(req, res, next) {
 	var newUsers = [];

 	for (var i = 0; i < users.length; i++) {
 		if (users[i].type === 'moderator') {
 			newUsers.push(users[i]);
 		}
 	}

 	res.status(200)
 		.json(newUsers);
 });
 app.get('/api/users/user', function(req, res, next) {
 	var newUsers = [];

 	for (var i = 0; i < users.length; i++) {
 		if (users[i].type === 'user') {
 			newUsers.push(users[i]);
 		}
 	}

 	res.status(200)
 		.json(newUsers);
 });
 app.get('/api/users/:id', function(req, res, next) {
 	var id = req.params.id;
 	var newUsers = [];

 	for (var i = 0; i < users.length; i++) {
 		if (users[i].id == id) {
 			newUsers.push(users[i]);
 		}
 	}

 	res.status(200)
 		.json(newUsers);
 });

 app.post('/api/users', addId, function(req, res, next) {
 	req.body.favorites = [];
 	req.body.type = 'user';
 	users.push(req.body);
 	res.status(200)
 		.send(req.body);
 });
 app.post('/api/users/:privilege', addId, function(req, res, next) {
 	var privilege = req.params.privilege;
 	req.body.favorites = req.body.favorites.split(',');

 	req.body.type = privilege;

 	users.push(req.body);

 	res.status(200)
 		.json(users);
 });
 app.post('/api/users/language/:id', function(req, res, next) {

 	if (!req.body.language) {

 		return res.status(200)
 			.send('error changing language');
 	} else if (req.params.id > users.length) {
 		return res.status(200)
 			.send('error changing language to ' + req.body.language);
 	}

 	var id = req.params.id;
 	var updatedUser;

 	for (var i = 0; i < users.length; i++) {
 		if (users[i].id === id * 1) {
 			users[i].language = req.body.language;
 			return res.status(200)
 				.json(users[i]);
 		}
 	}
 });
 app.post('/api/users/forums/:id', function(req, res, next) {
 	var id = req.params.id * 1;
 	var name = req.body.add;
 	var user;
 	console.log(name, id, req.body);

 	if (name) {
 		console.log('hey there');

 		for (var i = 0; i < users.length; i++) {
 			if (users[i].id === id) {
 				users[i].favorites.push(name);
 				user = users[i];
 			}
 		}
 	}

 	return res.status(200)
 		.json(user);
 });
 app.delete('/api/users/forums/:id', function(req, res, next) {
 	var id = req.params.id * 1;
 	var favorite = req.query.favorite;
 	var user;

 	if (favorite) {
 		for (var i = 0; i < users.length; i++) {
 			if (users[i].id === id) {
 				user = users[i];

 				for (var j = 0; j < user.favorites.length; j++) {
 					if (user.favorites[j] === favorite) {
 						user.favorites.splice(j, 1);
 					}
 				}
 			}
 		}
 		return res.status(200)
 			.json(user);
 	} else {
 		return res.status(200)
 			.json('No favorite found');
 	}
 });
 app.delete('/api/users/:id', function(req, res, next) {
 	var id = req.params.id * 1;

 	for (var i = 0; i < users.length; i++) {
 		if (users[i].id === id) {
 			users.splice(i, 1);
 		}
 	}

 	return res.status(200)
 		.json(users);
 });
 app.put('/api/users/:id', function(req, res, next) {
 	var id = req.params.id * 1;
 	var update = req.body;
 	var user;
 	console.log(req.body);


 	for (var i = 0; i < users.length; i++) {
 		if (users[i].id === id) {
 			for (var key in update) {
 				users[i][key] = update[key];
 			}
 			user = users[i];
 		}
 	}

 	res.status(200)
 		.json(user);
 });

 var port = 3000;
 app.listen(port, function() {
 	console.log('Server listening on port', port);
 });
