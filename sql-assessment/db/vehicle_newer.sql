SELECT Vehicles.*, Users.firstname, Users.lastname
FROM Vehicles
INNER JOIN Users
ON Vehicles.ownerId = Users.id
WHERE year > 2000
ORDER BY year DESC
