const DOCUMENTATION = require("./documentation.js");
const CombatActions = require("./data/combat_actions.js");
const SkillChecks = require("./data/skill_checks.js");
const Strains = require("./data/strains.js");
const Traits = require("./data/traits.js");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const { Client } = require('pg');
const createError = require('http-errors');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// });

// client.connect();
// 
// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (const row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

// Parse queries and parameters.
const PAYLOAD_LIMIT = '5mb';
app.use(express.json({limit: PAYLOAD_LIMIT}));
app.use(express.urlencoded({extended: false, limit: PAYLOAD_LIMIT}));

// Console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static("client/build", {index: false}));

// Connect the API
app.use('/api/v1', require('./api/v1/index'));
app.use('/api', (req, res, next) => next(createError(404, "You must specify a valid API version. Ex: `/api/v1`.")));


// Return old items until they're properly added to the API
app.get("/documentation", (req, res) => {
  res.send({DOCUMENTATION});
});

app.get("/combatactions", (req, res) => {
  res.send({CombatActions});
});

app.get("/skillchecks", (req, res) => {
  res.send({SkillChecks});
});

app.get("/strains", (req, res) => {
  res.send({Strains});
});

app.get("/traits", (req, res) => {
  res.send({Traits});
});

// For any other request, let React handle it.
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});
