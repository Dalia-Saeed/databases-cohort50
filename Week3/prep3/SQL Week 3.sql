CREATE TABLE recipe (
    recipe_id SERIAL PRIMARY KEY,
    recipe_name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE category (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE recipe_category (
    recipe_id INT REFERENCES recipe(recipe_id),
    category_id INT REFERENCES category(category_id),
    PRIMARY KEY (recipe_id, category_id)
);

CREATE TABLE ingredient (
    ingredient_id SERIAL PRIMARY KEY,
    ingredient_name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE recipe_ingredient (
    recipe_id INT REFERENCES recipe(recipe_id),
    ingredient_id INT REFERENCES ingredient(ingredient_id),
    quantity VARCHAR(100),
    PRIMARY KEY (recipe_id, ingredient_id)
);

CREATE TABLE step (
    step_id SERIAL PRIMARY KEY,
    step_description TEXT NOT NULL
);

CREATE TABLE recipe_step (
    recipe_id INT REFERENCES recipe(recipe_id),
    step_id INT REFERENCES step(step_id),
    step_order INT NOT NULL,
    PRIMARY KEY (recipe_id, step_id)
);
