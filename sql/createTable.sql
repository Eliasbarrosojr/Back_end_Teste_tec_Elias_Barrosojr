CREATE TABLE IF NOT EXISTS users(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(40) NOT NULL,
    "email" VARCHAR(120) UNIQUE NOT NULL,
    "phone" VARCHAR(11) NOT NULL
);
