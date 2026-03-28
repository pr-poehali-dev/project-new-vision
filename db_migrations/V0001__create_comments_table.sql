CREATE TABLE t_p38576080_project_new_vision.comments (
  id SERIAL PRIMARY KEY,
  author_name VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);