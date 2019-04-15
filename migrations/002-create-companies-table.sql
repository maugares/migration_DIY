-- +migrate Up

CREATE TABLE companies (
  id SERIAL,
  name owner
);

-- +migrate Down

DROP TABLE IF EXISTS users;