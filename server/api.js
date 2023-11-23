const express = require('express');
const apiRouter = express.Router();
const { getAllFromDatabase } = require('./db');

// Import routers below from files
const minionsRouter = require('./minions');

// Declare use of each router below
apiRouter.use('/minions', minionsRouter);

module.exports = apiRouter;
