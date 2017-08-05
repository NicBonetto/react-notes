-- up
CREATE TABLE notes (
  id           serial,
  note_content text
);

---

-- down
DROP TABLE notes;
