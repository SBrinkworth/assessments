UPDATE Vehicles
SET ownerId = null
WHERE id = $1 and ownerId = $2;
