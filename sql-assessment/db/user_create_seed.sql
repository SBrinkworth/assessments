-- It may be helpful to drop and reinstantilize the table when doing
-- the tests in case you delete users/cars the tests are expecting to see
DROP TABLE IF EXISTS users;

CREATE TABLE Users (
  id serial primary key,
  firstname varchar(255),
  lastname varchar(255),
  email varchar(255)
);

INSERT INTO Users (firstname, lastname, email)
VALUES ( 'John', 'Smith', 'John@Smith.com');
INSERT INTO Users (firstname, lastname, email)
VALUES ( 'Dave', 'Davis', 'Dave@Davis.com');
INSERT INTO Users (firstname, lastname, email)
VALUES ( 'Jane', 'Janis', 'Jane@Janis.com');
