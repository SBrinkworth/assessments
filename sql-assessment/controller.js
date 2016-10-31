var app = require('./index');
var db = app.get('db');

module.exports = {
	getUsers: function(req, res, next) {
		db.users_get_all(function(err, users) {
			if (err) {
				return res.send(err);
			}
			res.send(users);
		});
	},
	getVehicles: function(req, res, next) {
		db.vehicles_get_all(function(err, vehicles) {
			if (err) {
				return res.send(err);
			}
			res.send(vehicles);
		});
	},
	postUsers: function(req, res, next) {
		var user = req.body;

		db.user_create(
      [user.firstname, user.lastname, user.email],
			function(err, user) {
				if (err) {
					return res.send(err);
				}
				res.send(user);
			});
	},
	postVehicles: function(req, res, next) {
		var vehicle = req.body;

		db.vehicle_create(
      [vehicle.make, vehicle.model, vehicle.year, vehicle.ownerId],
			function(err, vehicle) {
				if (err) {
					return res.send(err);
				}
				res.send(vehicle);
			});
	},
	countVehicles: function(req, res, next) {
		var id = req.params.id * 1;

		db.user_count_vehicles([id], function(err, count) {
			if (err) {
				return res.send(err);
			}
			res.status(200)
				.send(count[0]);
		});
	},
	userVehicles: function(req, res, next) {
		var id = req.params.id * 1;

		db.user_vehicles([id], function(err, vehicles) {
			if (err) {
				return res.send(err);
			}
			res.status(200)
				.send(vehicles);
		});
	},

	userVehiclesByFilter: function(req, res, next) {
		var filter = req.query;

		if (filter.UserEmail) {
			db.vehicle_filter_email([filter.UserEmail], function(err, vehicles) {
				if (err) {
					return res.send(err);
				}
				res.status(200)
					.send(vehicles);
			});
		} else if (filter.userFirstStart) {
			db.vehicle_filter_name([filter.userFirstStart + '%'], function(err, vehicles) {
				if (err) {
					return res.send(err);
				}
				res.status(200)
					.send(vehicles);
			});
		} else {
			res.status(200)
				.send('Appropriate filters not applied');
		}
	},

	newerVehicles: function(req, res, next) {
		db.vehicle_newer(function(err, vehicles) {
			if (err) {
				return res.send(err);
			}
			res.status(200)
				.send(vehicles);
		});
	},
	changeOwner: function(req, res, next) {
		var user = req.params.userId;
		var vehicle = req.params.vehicleId;

		db.vehicle_change_owner([vehicle, user], function(err, vehicle) {
			if (err) {
				return res.send(err);
			}
			res.status(200)
				.send(vehicle);
		});
	},
	removeOwnership: function(req, res, next) {
		var user = req.params.userId;
		var vehicle = req.params.vehicleId;

		db.vehicle_remove_owner([vehicle, user], function(err, vehicle) {
			if (err) {
				return res.send(err);
			}
			res.status(200)
				.send(vehicle);
		});
	},
	deleteVehicle: function(req, res, next) {
		var vehicle = req.params.vehicleId;

		db.vehicle_delete([vehicle], function(err, vehicle) {
			if (err) {
				return res.send(err);
			}
			res.status(200)
				.send();
		});
	}
};
