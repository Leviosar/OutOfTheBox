
CREATE TABLE tag (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR NOT NULL,
    color VARCHAR(6) NOT NULL
);


CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY ,
    password VARCHAR(128) NOT NULL,
    email VARCHAR NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_in TIMESTAMP NOT NULL
);

CREATE TABLE follows (
    id_user INTEGER NOT NULL,
    id_follower INTEGER NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users (id),
    FOREIGN KEY (id_follower) REFERENCES users (id),
    PRIMARY KEY (id_user, id_follower)
);


CREATE TABLE access_token (
    token VARCHAR(64) NOT NULL,
    created_in TIMESTAMP NOT NULL,
    id_user INTEGER NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users (id)
);

CREATE TABLE class (
    id SERIAL NOT NULL PRIMARY KEY,
    id_teacher INTEGER NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (id_teacher) REFERENCES users (id)
);

CREATE TABLE rate (
    id_user INTEGER NOT NULL,
    id_class INTEGER NOT NULL,
    rate BOOLEAN NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users (id),
    FOREIGN KEY (id_class) REFERENCES class (id),
    PRIMARY KEY (id_class, id_user)
);


CREATE TABLE students (
    id_class INTEGER NOT NULL,
    id_user INTEGER NOT NULL,
    PRIMARY KEY (id_class, id_user),
    FOREIGN KEY (id_user) REFERENCES users (id),
    FOREIGN KEY (id_class) REFERENCES class (id)
);

CREATE TABLE file (
    id SERIAL NOT NULL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    size REAL NOT NULL,
    description TEXT NOT NULL,
    id_class INTEGER NOT NULL,
    FOREIGN KEY (id_class) REFERENCES class (id)
);

CREATE TABLE class_tag (
    id_class INTEGER NOT NULL,
    id_tag INTEGER NOT NULL,
    PRIMARY KEY (id_class, id_tag),
    FOREIGN KEY (id_class) REFERENCES class (id),
    FOREIGN KEY (id_class) REFERENCES tag (id)
);