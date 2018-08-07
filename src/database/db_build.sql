BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(100) NOT NULL,
    author VARCHAR(30) NOT NULL,
    reserved boolean,
    users_id INTEGER REFERENCES users(id)
);

INSERT INTO users (first_name, last_name) VALUES ('Mohannad', 'Al-Hanafi');
INSERT INTO books (name , description, author, reserved, users_id) VALUES ('Yousef Ya Maryam',
'great book with blablabla',
'Sheksbear', false, 1); 
COMMIT;