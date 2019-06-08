const DOCUMENTATION = require("./documentation.js");
const CombatActions = require("./data/combat_actions.js");
const SkillChecks = require("./data/skill_checks.js");
const Strains = require("./data/strains.js");
const Traits = require("./data/traits.js");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

// Console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
    res.send(`You've reached Flax's server, there's no UI here.`);
});

app.use(express.static('client/build', {index: false}));

// Create a GET route
app.get("/express_backend", (req, res) => {
    res.send({express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT booyah"});
});

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
    res.sendFile(path.resolve(__dirname, './client/build/index.html'));
});
