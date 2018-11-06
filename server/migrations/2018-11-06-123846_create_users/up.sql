-- Your SQL goes here
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    oauth_provider VARCHAR NOT NULL,
    oauth_id VARCHAR NOT NULL
);
