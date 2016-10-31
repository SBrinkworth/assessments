-- It may be helpful to drop and reinstantilize the table when doing
-- the tests in case you delete users/cars the tests are expecting to see
DROP TABLE IF EXISTS vehicles;

CREATE TABLE Vehicles (
  id serial primary key,
  make varchar(255),
  model varchar(255),
  year integer,
  ownerId integer REFERENCES Users
);

INSERT INTO Vehicles (make, model, year, ownerId)
VALUES ('Toyota', 'Camry', 1991, 1);
INSERT INTO Vehicles (make, model, year, ownerId)
VALUES ('Honda', 'Civic', 1995, 1);
INSERT INTO Vehicles (make, model, year, ownerId)
VALUES ('Ford', 'Focus', 2005, 1);
INSERT INTO Vehicles (make, model, year, ownerId)
VALUES ('Ford', 'Taurus', 2003, 2);
INSERT INTO Vehicles (make, model, year, ownerId)
VALUES ('VW', 'Bug', 2010, 2);
INSERT INTO Vehicles (make, model, year, ownerId)
VALUES ('Mini', 'Coup', 2013, 3);
