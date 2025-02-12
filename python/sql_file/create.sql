INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Silver Star', 'Montagne russe', 3, 1);
INSERT INTO attraction (nom, description, difficulte, visible) VALUES ('Montagne 8', 'Montagne russe', 4, 1);

INSERT INTO users (name, password) VALUES ('toto', 'toto');

INSERT INTO avis (attraction_id, texte, note, nom, prenom, anonyme) 
VALUES (1, 'Super attraction !', 5, 'Alice', 'Durand', false),
       (2, 'Un peu trop intense pour moi.', 3, '', '', true);