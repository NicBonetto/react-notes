DROP TABLE IF EXISTS notes;

CREATE TABLE notes (
  id           serial,
  note_content text
);

INSERT INTO notes (note_content)
VALUES
  ('This is my first note.'),
  ('This is my second note.'),
  ('This is my third note.');
