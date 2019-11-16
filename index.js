const express = require('express');
const app = express();
const { config } = require('./config/index');
const ridesApi = require('./routes/rides.js');

ridesApi(app);

app.listen(config.port, function() {
    console.log(`listening http://localhost:${config.port}`);
});