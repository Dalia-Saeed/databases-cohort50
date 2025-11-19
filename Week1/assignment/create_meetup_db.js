// create_meetup_db.js

const { Client } = require("pg");

const adminClient = new Client({
  user: "hyfuser",
  host: "localhost",
  database: "postgres",
  password: "your_password",
  port: 5432,
});

async function createDatabase() {
  try {
    await adminClient.connect();
    await adminClient.query("DROP DATABASE IF EXISTS meetup;");
    await adminClient.query("CREATE DATABASE meetup;");
    console.log("Database 'meetup' created successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await adminClient.end();
  }
}

async function setupMeetupDB() {
  const client = new Client({
    user: "hyfuser",
    host: "localhost",
    database: "meetup",
    password: "your_password",
    port: 5432,
  });

  try {
    await client.connect();

    // Create tables
    await client.query(`
      CREATE TABLE Invitee (
        invitee_no SERIAL PRIMARY KEY,
        invitee_name VARCHAR(100),
        invited_by VARCHAR(100)
      );
    `);

    await client.query(`
      CREATE TABLE Room (
        room_no SERIAL PRIMARY KEY,
        room_name VARCHAR(100),
        floor_number INT
      );
    `);

    await client.query(`
      CREATE TABLE Meeting (
        meeting_no SERIAL PRIMARY KEY,
        meeting_title VARCHAR(200),
        starting_time TIMESTAMP,
        ending_time TIMESTAMP,
        room_no INT REFERENCES Room(room_no)
      );
    `);

    console.log("Tables created successfully!");

    // Insert 5 rows into each table
    await client.query(`
      INSERT INTO Invitee (invitee_name, invited_by)
      VALUES 
        ('Ahmed', 'Samir'),
        ('Fatma', 'Sara'),
        ('Omar', 'Ali'),
        ('Laila', 'Nora'),
        ('Youssef', 'Hassan');
    `);

    await client.query(`
      INSERT INTO Room (room_name, floor_number)
      VALUES
        ('Main Hall', 1),
        ('Conference A', 2),
        ('Conference B', 2),
        ('Meeting Room 1', 3),
        ('Meeting Room 2', 3);
    `);

    await client.query(`
      INSERT INTO Meeting (meeting_title, starting_time, ending_time, room_no)
      VALUES
        ('Tech Meetup', NOW(), NOW() + INTERVAL '2 hour', 1),
        ('Project Kickoff', NOW(), NOW() + INTERVAL '1 hour', 2),
        ('Team Sync', NOW(), NOW() + INTERVAL '30 minutes', 3),
        ('Client Call', NOW(), NOW() + INTERVAL '45 minutes', 4),
        ('Training Session', NOW(), NOW() + INTERVAL '3 hours', 5);
    `);

    console.log("Data inserted successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

async function main() {
  await createDatabase();
  await setupMeetupDB();
}

main();
