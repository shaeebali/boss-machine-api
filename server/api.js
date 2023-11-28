const express = require('express');
const apiRouter = express.Router();
const { getAllFromDatabase } = require('./db');

// Import routers below from files
const minionsRouter = require('./minions');
const ideasRouter = require('./ideas');
const mettingsRouter = require('./meetings');

// Declare use of each router below
apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', mettingsRouter);

module.exports = apiRouter;
