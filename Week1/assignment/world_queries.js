
const { Client } = require("pg");

const client = new Client({
  user: "hyfuser",
  host: "localhost",
  database: "world",
  password: "your_password",
  port: 5432,
});

async function runQueries() {
  try {
    await client.connect();

    const queries = [
      {
        question: "Countries with population > 8 million:",
        sql: "SELECT name FROM country WHERE population > 8000000;",
      },
      {
        question: 'Countries with "land" in their name:',
        sql: "SELECT name FROM country WHERE name ILIKE '%land%';",
      },
      {
        question: "Cities with population between 500k and 1M:",
        sql: `SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000;`,
      },
      {
        question: "Countries in Europe:",
        sql: "SELECT name FROM country WHERE continent = 'Europe';",
      },
      {
        question: "Countries ordered by surface area (descending):",
        sql: "SELECT name FROM country ORDER BY surfacearea DESC;",
      },
      {
        question: "Cities in Netherlands:",
        sql: "SELECT name FROM city WHERE countrycode = 'NLD';",
      },
      {
        question: "Population of Rotterdam:",
        sql: "SELECT population FROM city WHERE name = 'Rotterdam';",
      },
      {
        question: "Top 10 countries by surface area:",
        sql: "SELECT name FROM country ORDER BY surfacearea DESC LIMIT 10;",
      },
      {
        question: "Top 10 most populated cities:",
        sql: "SELECT name FROM city ORDER BY population DESC LIMIT 10;",
      },
      {
        question: "World population:",
        sql: "SELECT SUM(population) AS world_population FROM country;",
      },
    ];

    for (let q of queries) {
      console.log("\n--- " + q.question);
      const result = await client.query(q.sql);
      console.table(result.rows);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

runQueries();
