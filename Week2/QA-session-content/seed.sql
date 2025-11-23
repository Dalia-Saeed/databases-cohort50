INSERT INTO cuisines (name) VALUES
('Japanese'),
('Italian'),
('Mexican');


INSERT INTO recipes (name, cuisine_id, is_vegetarian, is_vegan, needs_baking) VALUES
('Vegan Sushi', 1, 1, 1, 0),
('No-Bake Chocolate Cake', 2, 1, 0, 0),
('Mashed Potatoes', 2, 1, 1, 0);


INSERT INTO ingredients (name) VALUES
('rice'),
('seaweed'),
('avocado'),
('chocolate'),
('potatoes');


INSERT INTO recipe_ingredients VALUES
(1, 1, '200g'),
(1, 2, '2 sheets'),
(1, 3, '1 sliced'),
(2, 4, '300g'),
(3, 5, '3 pcs');


INSERT INTO steps (recipe_id, step_number, instruction) VALUES
(1, 1, 'Prepare rice'),
(1, 2, 'Roll sushi'),
(2, 1, 'Mix chocolate'),
(3, 1, 'Boil potatoes'),
(3, 2, 'Mash them');


INSERT INTO tags (name) VALUES
('cake'),
('no-bake'),
('vegan');


INSERT INTO recipe_tags VALUES
(2, 1),
(2, 2),
(1, 3);