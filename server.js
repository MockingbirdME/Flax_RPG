const DOCUMENTATION = require('./documentation.js');
const Traits = require('./data/traits.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT booyah' });
});

app.get('/documentation', (req, res) => {
    res.send({DOCUMENTATION});
});

app.get('/traits', (req, res) => {
    res.send({Traits});
});
