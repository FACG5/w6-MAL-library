BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS books CASCADE;
DROP TABLE IF EXISTS bookuser CASCADE;




CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    author TEXT
);


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL

);

CREATE TABLE bookuser (
    id SERIAL PRIMARY KEY,
    book_id INTEGER REFERENCES books(id),
    users_id INTEGER REFERENCES users(id)
);

INSERT INTO users (first_name) VALUES ('Mohannad');
INSERT INTO books (name , description, author) VALUES ('Yousef Ya Maryam',
'great book with blablabla',
'Sheksbear'); 
INSERT INTO bookuser (book_id, users_id) values (1,1);

COMMIT;