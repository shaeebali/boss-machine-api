const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');
const minionsRouter = express.Router();

minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
  console.log(getAllFromDatabase('minions'))
})

minionsRouter.post('/', (req, res, next) => {
  const minion = addToDatabase('minions', req.body);
  res.status(201).send(minion);
})



module.exports = minionsRouter;
