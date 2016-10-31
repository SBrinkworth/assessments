SELECT Vehicles.*, Users.email
FROM Vehicles
INNER JOIN Users
  ON Vehicles.ownerId
  IN (
    SELECT id
    FROM Users
    WHERE email = $1
  )
