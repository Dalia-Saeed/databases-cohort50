import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


const dbPromise = open({
filename: './recipes.db',
driver: sqlite3.Database
});


async function vegetarianWithPotatoes() {
const db = await dbPromise;
const rows = await db.all(`
SELECT r.name
FROM recipes r
JOIN recipe_ingredients ri ON ri.recipe_id = r.id
JOIN ingredients i ON i.id = ri.ingredient_id
WHERE r.is_vegetarian = 1
AND i.name = 'potatoes'
`);
console.log('\nVegetarian recipes with potatoes:', rows);
}


async function cakesNoBake() {
const db = await dbPromise;
const rows = await db.all(`
SELECT r.name
FROM recipes r
JOIN recipe_tags rt ON rt.recipe_id = r.id
JOIN tags t ON t.id = rt.tag_id
WHERE t.name = 'cake'
AND r.needs_baking = 0
`);
console.log('\nNo-bake cakes:', rows);
}


async function veganJapanese() {
const db = await dbPromise;
const rows = await db.all(`
SELECT r.name
FROM recipes r
JOIN cuisines c ON c.id = r.cuisine_id
WHERE r.is_vegan = 1
AND c.name = 'Japanese'
`);
console.log('\nVegan Japanese recipes:', rows);
}


await vegetarianWithPotatoes();
await cakesNoBake();
await veganJapanese();