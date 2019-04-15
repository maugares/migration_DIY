-- +migrate Up

CREATE TABLE users (
  id SERIAL,
  name TEXT
);

-- +migrate Down

DROP TABLE IF EXISTS users;