SELECT Vehicles.*, Users.firstname
FROM Vehicles
INNER JOIN Users
  ON Vehicles.ownerId
  IN (
    SELECT id
    FROM Users
    WHERE firstname LIKE $1
  )
