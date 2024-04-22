CREATE TABLE IF NOT EXISTS songtable(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist_name TEXT, 
    song_name TEXT
);

INSERT or IGNORE INTO songtable(id, artist_name, song_name) VALUES (1, '12-11-2021', 'PRESENTE');

CREATE TABLE IF NOT EXISTS usuario(
    usuario TEXT PRIMARY KEY ,
    clave TEXT, 
    activo INTEGER
);

INSERT or IGNORE INTO usuario(usuario, clave, activo) VALUES ("felipe", '1234', 0);
INSERT or IGNORE INTO usuario(usuario, clave, activo) VALUES ("rodrigo", '1234', 0);

