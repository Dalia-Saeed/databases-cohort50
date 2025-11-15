CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE steps (
    id SERIAL PRIMARY KEY,
    instruction TEXT NOT NULL
);

CREATE TABLE recipe_categories (
    recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, category_id)
);

CREATE TABLE recipe_ingredients (
    recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
    ingredient_id INT REFERENCES ingredients(id) ON DELETE CASCADE,
    amount TEXT,
    PRIMARY KEY (recipe_id, ingredient_id)
);

CREATE TABLE recipe_steps (
    recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
    step_id INT REFERENCES steps(id) ON DELETE CASCADE,
    step_order INT NOT NULL,
    PRIMARY KEY (recipe_id, step_id)
);
CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
