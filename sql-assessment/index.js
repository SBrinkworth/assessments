var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
//Need to enter username and password for your database
var connString = "postgres://localhost/assessbox";

var app = express();

app.use(bodyParser.json());
app.use(cors());

//The test doesn't like the Sync version of connecting,
//  Here is a skeleton of the Async, in the callback is also
//  a good place to call your database seeds.
var db = massive.connect({
		connectionString: connString
	},
	function(err, localdb) {
		db = localdb;
		app.set('db', db);

		db.user_create_seed(function(err, table) {
			console.log("User Table Init");
		});
		db.vehicle_create_seed(function(err, table) {
			console.log("Vehicle Table Init");
		});

		var ctrl = require('./controller');

		app.get('/api/users', ctrl.getUsers);
		app.get('/api/vehicles', ctrl.getVehicles);
		app.post('/api/users', ctrl.postUsers);
		app.post('/api/vehicles', ctrl.postVehicles);
		app.get('/api/user/:id/vehiclecount', ctrl.countVehicles);
		app.get('/api/user/:id/vehicle', ctrl.userVehicles);
		app.get('/api/vehicle/', ctrl.userVehiclesByFilter);
		app.get('/api/newervehiclesbyyear', ctrl.newerVehicles);
		app.put('/api/vehicle/:vehicleId/user/:userId', ctrl.changeOwner);
		app.delete('/api/user/:userId/vehicle/:vehicleId', ctrl.removeOwnership);
		app.delete('/api/vehicle/:vehicleId', ctrl.deleteVehicle);
	}
);

app.listen('3000', function() {
	console.log("Successfully listening on : 3000");
});

module.exports = app;
