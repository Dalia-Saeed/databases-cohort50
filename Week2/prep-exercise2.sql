-- Recipes Table
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  is_vegetarian BOOLEAN DEFAULT FALSE,
  is_vegan BOOLEAN DEFAULT FALSE,
  requires_baking BOOLEAN DEFAULT TRUE,
  cuisine_type TEXT,
  difficulty TEXT,           
  cooking_time INT           
);

-- Categories Table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

-- Junction Table: recipes ↔ categories
CREATE TABLE recipe_categories (
  recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
  category_id INT REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (recipe_id, category_id)
);

-- Ingredients Table
CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

-- Junction Table: recipes ↔ ingredients
CREATE TABLE recipe_ingredients (
  recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
  ingredient_id INT REFERENCES ingredients(id) ON DELETE CASCADE,
  quantity TEXT,
  PRIMARY KEY (recipe_id, ingredient_id)
);

-- Steps Table (Reusable step instructions)
CREATE TABLE steps (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL UNIQUE
);

-- Junction Table: recipes ↔ steps (with ordering)
CREATE TABLE recipe_steps (
  recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
  step_id INT REFERENCES steps(id) ON DELETE CASCADE,
  step_order INT NOT NULL,
  PRIMARY KEY (recipe_id, step_id)
);
