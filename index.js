const express = require('express');
const app = express();
var cors = require('cors')


const { config } = require('./config/index');
const ridesApi = require('./routes/rides.js');
const userRidesApi = require('./routes/userRides')
const { logErrors, errorHandler, wrapErrors} = require('./utils/middleware/errorsHandlers.js')

const notFounHandler = require('./utils/middleware/notFoundHandler');

//allow cors
app.use(cors())

//body parse
app.use(express.json());

// routes
ridesApi(app);
userRidesApi(app);

//Catch 404
app.use(notFounHandler)

//Errors middleware
app.use(logErrors);
app.use(wrapErrors)
app.use(errorHandler);

app.listen(config.port, function() {
    console.log(`listening http://localhost:${config.port}`);
});